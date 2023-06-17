import moment from 'moment';
import axios from 'axios';
import { VueCookieNext } from 'vue-cookie-next';
import eventBus from 'vue3-eventbus';
import VuePdf from 'vue3-pdfjs';

import "font-awesome/css/font-awesome.min.css";
import Antd from 'ant-design-vue';
import loadComponent from './loadComponent';
import { map, filter, reduce, array2tree } from './flowUtils';
import { getAction, downloadAction, downloadFile, postAction, deleteAction, putAction } from '/@/request/http';
import { getToken } from '/@/utils/auth';
import { getFilterValues } from '/@/utils/util';

import './index.css';

export function registerBlockDesign(app) {
  app.config.globalProperties.$moment = moment;
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$getAction = getAction;
  app.config.globalProperties.$downloadAction = downloadAction;
  app.config.globalProperties.$downloadFile = downloadFile;
  app.config.globalProperties.$postAction = postAction;
  app.config.globalProperties.$deleteAction = deleteAction;
  app.config.globalProperties.$putAction = putAction;

  app.config.globalProperties.$getCssUnit = function (value) {
    if (isNaN(Number(value))) {
      return value;
    }
    return `${value}px`;
  };
  app.config.globalProperties.$getToken = getToken;
  app.config.globalProperties.$map = map;
  app.config.globalProperties.$filter = filter;
  app.config.globalProperties.$reduce = reduce;
  app.config.globalProperties.$array2tree = array2tree;
  //formily表单格式化为过滤器值的方法
  app.config.globalProperties.$getFilterValues = getFilterValues;

  app.use(Antd);
  app.use(loadComponent);
  app.use(eventBus);
  app.use(VuePdf);
  app.use(VueCookieNext);
  return app;
}

export default {
  registerBlockDesign
} 
