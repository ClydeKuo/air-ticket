export default [{
  path: '',  //flying through clouds
  title: 'HOME',
  name:'home',
  component: (resolve) => require(['./home.vue'], resolve)
  }, {
  path: '/airTickets',  
  component: (resolve) => require(['./index.vue'], resolve),
  children: [{
    path: '',
    title: '机票',
    name: 'airTickets',
    component: (resolve) => require(['./airTickets/index.vue'], resolve),
  }, {
    path: '/signIn',
    title: '注册',
    name: 'signIn',
    component: (resolve) => require(['./signIn/index.vue'], resolve),
  }, {
    path: '/about',
    title: '关于',
    name: 'about',
    component: (resolve) => require(['./aboutus/index.vue'], resolve),
  }, {
    path: '/advice',
    title: '投诉建议',
    name: 'advice',
    component: (resolve) => require(['./advice/index.vue'], resolve),
  }, {
    path: '/hotel',
    title: '酒店',
    name: 'hotel',
    component: (resolve) => require(['./hotel/index.vue'], resolve),
  }, {
    path: '/discovery',
    title: '发现',
    name: 'discovery',
    component: (resolve) => require(['./discovery/index.vue'], resolve),
  }]
}]