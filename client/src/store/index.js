const axios = require('axios').default;

import Vue from "vue";
import Vuex from "vuex";

import router from '@/router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: []
  },
  mutations: {
    updateMenu: (store, data) => {
      store.menu = data
    }
  },
  actions: {
    loadMenu: async (store) => {
      try {
        const loadMenuQuery = await axios({
          method: 'get',
          url: '/api/load-menu'
        })
  
        if (loadMenuQuery) {
          store.commit('updateMenu', loadMenuQuery.data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    createNewItem: async (store, data) => {
      try {
        const createItemQuery = await axios({
          method: 'post',
          url: '/api/create-item',
          data
        })
        
        if (createItemQuery.data.createMenuItem) {
          router.push({ path: '/' })
        }
      } catch (error) {
        console.error(error)
      }
    },
    deleteItem: async (store, id) => {
      try {
        const deleteItemQuery = await axios({
          method: 'delete',
          url: `/api/delete-item/${id}`
        })
        if (deleteItemQuery.data) {
          store.dispatch('loadMenu')
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
});
