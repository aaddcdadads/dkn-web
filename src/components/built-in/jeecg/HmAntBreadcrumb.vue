<template>
  <div>
    <a-breadcrumb :routes="croutes">
      <template #itemRender="{ route, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>
<script>
import { defineComponent} from 'vue';
export default defineComponent({
  name:'HmAntBreadcrumb',
  props:{
    /**
     * 路由信息
     */
    routes:{
      type: Array,
       default: function () {
        return [
      {
        path: 'index',
        breadcrumbName: 'home',
      },
      {
        path: 'first',
        breadcrumbName: 'first',
        children: [
          {
            path: '/general',
            breadcrumbName: 'General',
          },
          {
            path: '/layout',
            breadcrumbName: 'Layout',
          },
          {
            path: '/navigation',
            breadcrumbName: 'Navigation',
          },
        ],
      },
      {
        path: 'second',
        breadcrumbName: 'second',
      },
    ]
       }
    },
    /**
     * 跳转链接
     */
    basePath:{
      type:String,
      default:'/components/breadcrumb',
    }
  },
  watch:{
    routes(value){
      this.croutes = value
    }
  },
  mounted(){
    this.croutes = this.routes
  },
  
   data() {
    return {
      croutes: [],
    };
  },
});
</script>