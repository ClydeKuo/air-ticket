import mainRouterConfig from './views/routerConfig.js'
const routers = [{
  path: '/',
  meta: {
    title: 'AIR TICKETS'
  },
  component: (resolve) => require(['./views/index.vue'], resolve),
  children: [mainRouterConfig]
}];
export default routers;
