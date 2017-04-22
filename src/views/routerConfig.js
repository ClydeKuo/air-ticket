export default [{
  path: '',
  title: 'HOME',
  name:'home',
  component: (resolve) => require(['./home.vue'], resolve)
}, {
  path: '/main',
  title: 'AIR TICKETS',
  component: (resolve) => require(['./index.vue'], resolve),
  children: [{
    path: '',
    title: 'AIR TICKETS',
    name: 'main',
    component: (resolve) => require(['./ucenter/index.vue'], resolve),
  }, {
    path: '/ucenter',
    title: '用户中心',
    name: 'ucenter',
    component: (resolve) => require(['./ucenter/index.vue'], resolve),
  }, {
    path: '/security',
    title: '安全中心',
    name: 'security',
    component: (resolve) => require(['./security/index.vue'], resolve),
  }]
}]