import Vue from 'vue'
import Vuex from 'vuex'
import feathers from '@/feathers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feathers,
    services: {
      todos: feathers.service('todos')
    },
    user: null,
    userId: null,
    todos: []
  },
  getters: {
    user: state => state.user,
    todos: state => state.todos
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload.email
      state.userId = payload._id
    },
    setTodos (state, payload) {
      state.todos = payload
    }
  },
  actions: {
    async reAuth ({ state, commit }) {
      try {
        const response = await state.feathers.reAuthenticate()
        commit('setUser', response.user)
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    },

    async login ({ state, commit }, payload) {
      try {
        const response = await state.feathers.authenticate({
          strategy: 'local',
          ...payload
        })
        commit('setUser', response.user)
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    },

    async addTodo ({ state, dispatch }, payload) {
      try {
        await state.services.todos.create({ title: payload, userId: state.userId })
        dispatch('fetchTodos')
      } catch (err) {
        console.log(err)
      }
    },

    async fetchTodos ({ state, commit }) {
      try {
        const response = await state.services.todos.find({ query: {} })
        commit('setTodos', response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
