import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import AuthLayout from '../components/auth/AuthLayout.vue'
// import AppLayout from '../components/admin/AppLayout.vue'

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '*',
  //   redirect: { name: 'dashboard' },
  // },
  // {
  //   path: '/auth',
  //   component: AuthLayout,
  //   children: [
  //     {
  //       name: 'login',
  //       path: 'login',
  //       component: () => import('../components/auth/login/Login.vue'),
  //     },
  //     {
  //       name: 'signup',
  //       path: 'signup',
  //       component: () => import('../components/auth/signup/Signup.vue'),
  //     },
  //     {
  //       name: 'recover-password',
  //       path: 'recover-password',
  //       component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
  //     },
  //     {
  //       path: '',
  //       redirect: { name: 'login' },
  //     },
  //   ],
  // },
  // {
  //   path: '/404',
  //   component: EmptyParentComponent,
  //   children: [
  //     {
  //       name: 'not-found-advanced',
  //       path: 'not-found-advanced',
  //       component: () => import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
  //     },
  //     {
  //       name: 'not-found-simple',
  //       path: 'not-found-simple',
  //       component: () => import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
  //     },
  //     {
  //       name: 'not-found-custom',
  //       path: 'not-found-custom',
  //       component: () => import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
  //     },
  //     {
  //       name: 'not-found-large-text',
  //       path: '/pages/not-found-large-text',
  //       component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
  //     },
  //   ],
  // },
  // {
  //   name: 'Admin',
  //   path: '/admin',
  //   component: AppLayout,
  //   children: [
  //     {
  //       name: 'dashboard',
  //       path: 'dashboard',
  //       component: () => import('../components/dashboard/Dashboard.vue'),
  //       default: true,
  //     },
  //     {
  //       name: 'statistics',
  //       path: 'statistics',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: 'charts',
  //           path: 'charts',
  //           component: () => import('../components/statistics/charts/Charts.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
  //           },
  //         },
  //         {
  //           name: 'progress-bars',
  //           path: 'progress-bars',
  //           component: () => import('../components/statistics/progress-bars/ProgressBars.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       name: 'forms',
  //       path: 'forms',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: 'form-elements',
  //           path: 'form-elements',
  //           component: () => import('../components/forms/form-elements/FormElements.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
  //           },
  //         },
  //         {
  //           name: 'medium-editor',
  //           path: 'medium-editor',
  //           component: () => import('../components/forms/medium-editor/MediumEditor.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       name: 'tables',
  //       path: 'tables',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: 'markup',
  //           path: 'markup',
  //           component: () => import('../components/markup-tables/MarkupTables.vue'),
  //           wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables', // TODO Update docs
  //         },
  //         {
  //           name: 'data',
  //           path: 'data',
  //           component: () => import('../components/data-tables/DataTables.vue'),
  //           wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables', // TODO Add docs
  //         },
  //       ],
  //     },
  //     {
  //       name: 'ui',
  //       path: 'ui',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: 'typography',
  //           path: 'typography',
  //           component: () => import('../components/ui/typography/Typography.vue'),
  //         },
  //         {
  //           name: 'buttons',
  //           path: 'buttons',
  //           component: () => import('../components/ui/buttons/Buttons.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
  //           },
  //         },
  //         {
  //           name: 'rating',
  //           path: 'rating',
  //           component: () => import('../components/ui/rating/Rating.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Rating',
  //           },
  //         },
  //         {
  //           name: 'color-pickers',
  //           path: 'color-pickers',
  //           component: () => import('../components/ui/color-pickers/ColorPickers.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
  //           },
  //         },
  //         {
  //           name: 'timelines',
  //           path: 'timelines',
  //           component: () => import('../components/ui/timelines/Timelines.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
  //           },
  //         },
  //         {
  //           name: 'notifications',
  //           path: 'notifications',
  //           component: () => import('../components/ui/notifications/Notifications.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Notifications',
  //           },
  //         },
  //         {
  //           path: 'icons',
  //           component: () => import('../components/ui/icons/Icons.vue'),
  //           children: [
  //             {
  //               name: 'icon-sets',
  //               path: '', // Default route
  //               component: () => import('../components/ui/icons/SetsList.vue'),
  //               meta: {
  //                 wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
  //               },
  //             },
  //             {
  //               name: 'icon-set',
  //               path: ':name',
  //               component: () => import('../components/ui/icons/IconSet.vue'),
  //               props: true,
  //               meta: {
  //                 wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           name: 'spinners',
  //           path: 'spinners',
  //           component: () => import('../components/ui/spinners/Spinners.vue'),
  //         },
  //         {
  //           name: 'grid',
  //           path: 'grid',
  //           component: () => import('../components/ui/grid/Grid.vue'),
  //         },
  //         {
  //           name: 'modals',
  //           path: 'modals',
  //           component: () => import('../components/ui/modals/Modals.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
  //           },
  //         },
  //         {
  //           name: 'cards',
  //           path: 'cards',
  //           component: () => import('../components/ui/cards/Cards.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
  //           },
  //         },
  //         {
  //           name: 'file-upload',
  //           path: 'file-upload',
  //           component: () => import('../components/ui/file-upload/FileUpload.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
  //           },
  //         },
  //         {
  //           name: 'chips',
  //           path: 'chips',
  //           component: () => import('../components/ui/chips/Chips.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Chips',
  //           },
  //         },
  //         {
  //           name: 'tree-view',
  //           path: 'tree-view',
  //           component: () => import('../components/ui/tree-view/TreeView.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
  //           },
  //         },
  //         {
  //           name: 'collapses',
  //           path: 'collapses',
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Collapse',
  //           },
  //           component: () => import('../components/ui/collapse/Collapses.vue'),
  //         },
  //         {
  //           name: 'colors',
  //           path: 'colors',
  //           component: () => import('../components/ui/colors/Colors.vue'),
  //         },
  //         {
  //           name: 'spacing',
  //           path: 'spacing',
  //           component: () => import('../components/ui/spacing/Spacing.vue'),
  //         },
  //         {
  //           name: 'sliders',
  //           path: 'sliders',
  //           component: () => import('../components/ui/sliders/Sliders.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Sliders',
  //           },
  //         },
  //         {
  //           name: 'popovers',
  //           path: 'popovers',
  //           component: () => import('../components/ui/popovers/Popovers.vue'),
  //         },
  //         {
  //           name: 'chat',
  //           path: 'chatPage',
  //           component: () => import('../components/ui/chat/ChatPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Chat',
  //           },
  //         },
  //         {
  //           name: 'tabs',
  //           path: 'tabs',
  //           component: () => import('../components/ui/tabs/Tabs.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
  //           },
  //         },
  //         {
  //           name: 'lists',
  //           path: 'lists',
  //           component: () => import('../components/ui/lists/Lists.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Lists',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       name: 'maps',
  //       path: 'maps',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: 'google-maps',
  //           path: 'google-maps',
  //           component: () => import('../components/maps/google-maps/GoogleMapsPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
  //           },
  //         },
  //         {
  //           name: 'yandex-maps',
  //           path: 'yandex-maps',
  //           component: () => import('../components/maps/yandex-maps/YandexMapsPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
  //           },
  //         },
  //         {
  //           name: 'leaflet-maps',
  //           path: 'leaflet-maps',
  //           component: () => import('../components/maps/leaflet-maps/LeafletMapsPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
  //           },
  //         },
  //         {
  //           name: 'bubble-maps',
  //           path: 'bubble-maps',
  //           component: () => import('../components/maps/bubble-maps/BubbleMapsPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
  //           },
  //         },
  //         {
  //           name: 'line-maps',
  //           path: 'line-maps',
  //           component: () => import('../components/maps/line-maps/LineMapsPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       name: 'pages',
  //       path: 'pages',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: '404-pages',
  //           path: '404-pages',
  //           component: () => import('../components/pages/404-pages/404PagesPage.vue'),
  //         },
  //         {
  //           name: 'faq',
  //           path: 'faq',
  //           component: () => import('../components/pages/FaqPage.vue'),
  //         },
  //       ],
  //     },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes
})

export default router
