import Vue from 'vue'
import Vuex from 'vuex'
//import state from "./state"
//import action from "./action"
//import mutations from "./mutations"
//import getters from "./getters"
import VuexPersistence from "vuex-persist"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        resturantName: '',
        userid: '',
        // token: '',
        defaultCar: [],
        shoplist:[],
        goodslist:[]
    },
    actions: {
        modifyAName: ({ commit }, name) => {
            return commit('modifyAName', name)
        },
        async getDefaultCar({ commit }, ) {

        }
    },
    mutations: {
        modifyAName(state, name) {
            state.resturantName = name;
            sessionStorage.setItem("resturantName", name)
        },
        // token(state, token) {
        //     state.token = token
        // }
        defaultCar(state, car) {
            state.defaultCar = car;
        },
        shoplist(state, shoplist){
        	state.shoplist=shoplist
        },
        goodslist(state, goodslist){
        	state.goodslist=goodslist
        }
    },
    getters: {
        resturantName(state) {
            if (!state.resturantName) {
                state.resturantName = sessionStorage.getItem('resturantName')
            }
            return state.resturantName
        }
    },
    plugins: [vuexLocal.plugin]
})