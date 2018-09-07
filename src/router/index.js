import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Header from '@/components/Header/Header.vue'
import Forme from '@/components/Forme/Forme.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: Main,
        header: Header
      },
      children: [
        {
          path: 'me',
          name: 'Forme',
          component: Forme
        }
      ]

    }
  ]
})
