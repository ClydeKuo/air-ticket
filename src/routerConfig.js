import mainRouterConfig from './views/routerConfig.js'
const routers = [{
  path: '/',
  title: 'AIR TICKETS',
  component: (resolve) => require(['./app.vue'], resolve),
  children: [mainRouterConfig]
}];
export default routers;
