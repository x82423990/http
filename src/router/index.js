import Vue from 'vue'
import Router from 'vue-router'
import Goodlist from './../views/Goodlist'
import title from '@/views/title'
import image from '@/views/image'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goodlist',
      component: Goodlist,
      children:[
        {
          path: 'title',
          name: 'title',
          component: title
        },
        {
          path: 'image',
          name: 'image',
          component: image
        }
      ]
    }
  ]
})
