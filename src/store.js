import Vue from 'vue';

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user : {
            tours : {},
            breakdown : [],
            socials : {}
        }
    },
    mutations : {
        setUser(state, payload){
            state.user = payload
        }
    }   
});