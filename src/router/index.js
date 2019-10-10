import Vue from 'vue'
import Router from 'vue-router'
import Sy from '../components/shouye.vue'
import Fl from '../components/fenlei.vue'
import Gwc from '../components/gwc.vue'
import Wode from '../components/wode.vue'

import Nan from '../components/zhuang/nan.vue'
import Nv from '../components/zhuang/nv.vue'
import Tong from '../components/zhuang/tong.vue'
import Yian from '../components/zhuang/yian.vue'
import Ying from '../components/zhuang/ying.vue'
import Yun from '../components/zhuang/yun.vue'

import Nani from '../components/fenlei/nani.vue'
import Nvi from '../components/fenlei/nvi.vue'
import Tongi from '../components/fenlei/tongi.vue'
import Yiani from '../components/fenlei/yiani.vue'
import Yingi from '../components/fenlei/yingi.vue'
import Yuni from '../components/fenlei/yuni.vue'

import Qbsp from '../components/qbsp.vue/qb'
import Qjxp from '../components/qbsp.vue/qjxp'
import Syl from '../components/qbsp.vue/syl'
import Wtl from '../components/qbsp.vue/wtl'
import Xsl from '../components/qbsp.vue/xsl'
import Lyq from '../components/qbsp.vue/lyq'
import Nyl from '../components/qbsp.vue/nyl'
import Jjf from '../components/qbsp.vue/jjf'
import Pj from '../components/qbsp.vue/pj'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Sy',
            name: 'Sy',
            component: Sy,
            children: [{
                    path: '/Nan',
                    name: 'Nan',
                    component: Nan
                },
                {
                    path: '/Tong',
                    name: 'Tong',
                    component: Tong
                },
                {
                    path: '/Yian',
                    name: 'Yian',
                    component: Yian
                },
                {
                    path: '/Ying',
                    name: 'Ying',
                    component: Ying
                },
                {
                    path: '/Nv',
                    name: 'Nv',
                    component: Nv
                },
                {
                    path: '/Yun',
                    name: 'Yun',
                    component: Yun
                },
            ]
        },
        {
            path: '/Fl',
            name: 'Fl',
            component: Fl,
            children: [{
                    path: '/Nani',
                    name: 'Nani',
                    component: Nani
                },
                {
                    path: '/Tongi',
                    name: 'Tongi',
                    component: Tongi
                },
                {
                    path: '/Yiani',
                    name: 'Yiani',
                    component: Yiani
                },
                {
                    path: '/Yingi',
                    name: 'Yingi',
                    component: Yingi
                },
                {
                    path: '/Nvi',
                    name: 'Nvi',
                    component: Nvi,
                    children: [{
                            path: '/Qbsp',
                            name: 'Qbsp',
                            component: Qbsp,
                        },
                        {
                            path: '/Qjxp',
                            name: 'Qjxp',
                            component: Qjxp,
                        }, {
                            path: '/Syl',
                            name: 'Syl',
                            component: Syl,
                        }, {
                            path: '/Wtl',
                            name: 'Wtl',
                            component: Wtl,
                        }, {
                            path: '/Xsl',
                            name: 'Xsl',
                            component: Xsl,
                        }, {
                            path: '/Lyq',
                            name: 'Lyq',
                            component: Lyq,
                        }, {
                            path: '/Nyl',
                            name: 'Nyl',
                            component: Nyl,
                        }, {
                            path: '/Jjf',
                            name: 'Jjf',
                            component: Jjf,
                        }, {
                            path: '/Pj',
                            name: 'Pj',
                            component: Pj,
                        }
                    ]
                },
                {
                    path: '/Yuni',
                    name: 'Yuni',
                    component: Yuni
                },
            ]
        },
        {
            path: '/Gwc',
            name: 'Gwc',
            component: Gwc
        },
        {
            path: '/Wode',
            name: 'Wode',
            component: Wode
        },
        {
            path: '/',
            redirect: '/Sy'
        },
        {
            path: '/Nan',
            name: 'Nan',
            component: Nan
        },
        {
            path: '/Tong',
            name: 'Tong',
            component: Tong
        },
        {
            path: '/Yian',
            name: 'Yian',
            component: Yian
        },
        {
            path: '/Ying',
            name: 'Ying',
            component: Ying
        },
        {
            path: '/Nv',
            name: 'Nv',
            component: Nv
        },
        {
            path: '/Yun',
            name: 'Yun',
            component: Yun
        },
        {
            path: '/Qbsp',
            name: 'Qbsp',
            component: Qbsp,
        },
        {
            path: '/Qjxp',
            name: 'Qjxp',
            component: Qjxp,
        }, {
            path: '/Syl',
            name: 'Syl',
            component: Syl,
        }, {
            path: '/Wtl',
            name: 'Wtl',
            component: Wtl,
        }, {
            path: '/Xsl',
            name: 'Xsl',
            component: Xsl,
        }, {
            path: '/Lyq',
            name: 'Lyq',
            component: Lyq,
        }, {
            path: '/Nyl',
            name: 'Nyl',
            component: Nyl,
        }, {
            path: '/Jjf',
            name: 'Jjf',
            component: Jjf,
        }, {
            path: '/Pj',
            name: 'Pj',
            component: Pj,
        }
    ]

})