import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth : false,
    name : ''
  },
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    setName(state, name) {
      state.name = name
    }
  },
  actions: {
   async updateMessage(_, message){
     console.log(message);
    await db.collection('messages')
    .doc(message.id)
    .set(message)
    .then(() => {
      console.log('message updated!')
    })
    },
   async deleteMessage(_, message){
     console.log(message);
    await db.collection('messages')
    .doc(message.id)
    .delete()
    .then(() => {
      console.log('message deleted!')
    })
    }
    
  },
  modules: {
  },
  getters : {
    isAutheticated(state) {
      return !!state.isAuth
    },
    getName(state) {
      return state.name;
    }
  }
})
