import { createStore } from 'vuex'
import axios from "axios";

const store = createStore({
  state: {
    global: [],
    technology: [],
    business:[],
    health: [],
  },
  getters: {
    getGlobal: (state) => state.global,
    getTechnology: (state) => state.technology,
    getBusiness: (state) => state.business,
    getHealth: (state) => state.health,
  },
  mutations: {
    SET_GLOBAL(state, payload){
      state.global = payload
    },
    SET_TECHNOLOGY(state, payload){
      state.technology = payload
    },
    SET_BUSINESS(state, payload){
      state.business = payload
    },
    SET_HEALTH(state, payload){
      state.health = payload
    },
  },
  actions: {
    async getAllGlobal({commit}) {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=keyword&apiKey=663173eded324aa0bc3554fb1ffdbbda");
        commit("SET_GLOBAL", response.data.articles);
        console.log(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllTechnology({commit}) {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?category=technology&apiKey=663173eded324aa0bc3554fb1ffdbbda");
        commit("SET_TECHNOLOGY", response.data.articles);
        console.log(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllBusiness({commit}) {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?category=business&apiKey=663173eded324aa0bc3554fb1ffdbbda");
        commit("SET_BUSINESS", response.data.articles);
        console.log(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllHealth({commit}) {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?category=health&apiKey=663173eded324aa0bc3554fb1ffdbbda");
        commit("SET_HEALTH", response.data.articles);
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
