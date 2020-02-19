export default [
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/src/pages/About.vue")
  },
  {
    path: "/Kyle-Brunswick/",
    component: () => import(/* webpackChunkName: "page--src--templates--profile-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/src/templates/Profile.vue")
  },
  {
    path: "/Timothy-Brunswick/",
    component: () => import(/* webpackChunkName: "page--src--templates--profile-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/src/templates/Profile.vue")
  },
  {
    path: "/Alyssa-Brunswick/",
    component: () => import(/* webpackChunkName: "page--src--templates--profile-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/src/templates/Profile.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/alyssabrunswick/Repos/reinhold-family-tree/node_modules/gridsome/app/pages/404.vue")
  }
]

