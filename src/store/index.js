import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
  state: {
    global: {},
  },
  getters: {
    getGlobal: (state) => state.global,
    getTechnology: (state) => state.global,
  },
  mutations: {
    SET_GLOBAL(state, payload){
      state.global = payload
    },
    SET_TECHNOLOGY(state, payload){
      state.global = payload
    },
  },
  actions: {
    async getAllGlobal({commit}) {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=keyword&apiKey=663173eded324aa0bc3554fb1ffdbbda");
        commit("SET_GLOBAL", response.data);
        console.log(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllTechnology({commit}) {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?category=technology&apiKey=28509d2d8bb942568a81dd838fca36ad");
        commit("SET_TECHNOLOGY", response.data);
        console.log(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})

export default store
