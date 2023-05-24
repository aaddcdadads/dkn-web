import axios from 'axios';
import { VueCookieNext } from 'vue-cookie-next';
import { TOKEN } from '@/utils/blockDesign/store/mutation-types';
import { Modal, notification } from 'ant-design-vue';
import { getToken } from '/@/utils/auth';

//设置baseURL
axios.defaults.baseURL = '';
// 请求超时时间
axios.defaults.timeout = 60 * 1000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 转换成代理的请求
 * @param {*} config
 * @returns
 */
function transformAxiosRequest(config) {
  if (!config.url) return;
  //转换proxy
  transformUrlProxy(config);
  // 相对路径拼接本地域名
  if (config.url.indexOf(':') == -1) {
    config.url = window.location.protocol + '//' + window.location.host + config.url;
  }
  let url = new URL(config.url);
  // config.headers['x-api-origin'] = url.origin;
  let schema = url.origin.split(':')[0];
  let port = url.port || (schema === 'http' ? 80 : 443);
  VueCookieNext.setCookie('x-project-api-schema', schema);
  VueCookieNext.setCookie('x-project-api-hostname', url.hostname);
  VueCookieNext.setCookie('x-project-api-port', port);
  config.url = `/project-api${url.pathname}`;
  return config;
}

function transformUrlProxy(config) {
  if (!localStorage.getItem('pro__msg')) return;

  let { proxy } = JSON.parse(JSON.parse(localStorage.getItem('pro__msg')).value);

  if (!proxy) return;

  proxy.forEach((item) => {
    config.url = config.url.indexOf(item[0]) == 0 ? `${item[1]}${config.url}` : config.url;
  });
}

function setBasicAuth(config) {
  let auth = localStorage.getItem('Authorization');
  if (auth) {
    config.headers['Authorization'] = auth;
  }

  let token = localStorage.getItem('token');
  if (token) {
    console.log(`token: `, token);
    config.headers['token'] = token;
    config.headers['Authorization'] = token;
    config.headers['X-Access-Token'] = token;
    config.headers['X-BD-Access-Token'] = token;
  }
}

function setJeecgAuth(config) {
  const token = getToken();
  console.log('token', token);
  if (!token) {
    return;
  }
  config.headers[TOKEN] = token ? token : '';
  return config;
}

function setEleAdminAuth(config) {
  let token = VueCookieNext.getCookie('EL-ADMIN-TOEKN');
  if (!token) {
    return;
  }
  console.log(`EL-ADMIN-TOEKN: `, token);
  config.headers['authorization'] = token;
}

function setDesignAuth(config) {
  let token = localStorage.getItem('pro__X-BD-Access-Token');
  if (!token) {
    return;
  }
  console.log(`pro__X-BD-Access-Token: `, token);
  token = token ? JSON.parse(token).value : null;
  config.headers['X-BD-Access-Token'] = token ? token : '';
  return config;
}

export function setAuth(config) {
  setBasicAuth(config);
  setJeecgAuth(config);
  setEleAdminAuth(config);
  setDesignAuth(config);
}

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    setAuth(config);

    // config = transformAxiosRequest(config);
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response) {
      let data = error.response.data;
      const token = localStorage.getItem(TOKEN);
      switch (error.response.status) {
        case 403:
          notification.error({
            message: '系统提示',
            description: '拒绝访问',
            duration: 4,
          });
          break;
        case 500:
          let message = data.message == 'Token失效，请重新登录!' ? 'Token失效，请重新登录' : '该账号已在异地登陆，请重新登录';
          notification.error({
            message: message,
            description: '拒绝访问',
            duration: 4,
          });
          break;
        case 404:
          notification.error({
            message: '系统提示',
            description: '很抱歉，资源未找到!',
            duration: 4,
          });
          break;
        case 504:
          notification.error({
            message: '系统提示',
            description: '网络超时',
          });
          break;
        case 401:
          notification.error({
            message: '系统提示',
            description: '未授权，请重新登录',
            duration: 4,
          });
          break;
        default:
          notification.error({
            message: '系统提示',
            description: data.message,
            duration: 4,
          });
          break;
      }
    }
    return Promise.reject(error.response);
  }
);

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getAction(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function downloadAction(url, params) {
  return axios({
    url: url,
    params: params,
    method: 'get',
    responseType: 'blob',
  });
}

export function downloadFile(fileName, url, params) {
  downloadAction(url, params).then((res) => {
    if (!res) {
      this.$message.warning('文件下载失败');
      return;
    }

    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(new Blob([res.data]), fileName);
    } else {
      let url = window.URL.createObjectURL(new Blob([res.data]));
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); //下载完成移除元素
      window.URL.revokeObjectURL(url); //释放掉blob对象
    }
  });
}

/**
 * post方法，对应post请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postAction(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * put方法，对应put请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function putAction(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * get方法，对应get请求
 * @author James.yang
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deleteAction(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
