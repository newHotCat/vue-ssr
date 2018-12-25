const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "group-index" */'../components/index.vue')
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "group-404" */'../components/404.vue')
    }
]

export default routes