/**
 * Created by orange on 2017/8/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    collectionArr:[]
}

const mutations = {
    add(state,item){
        state.collectionArr.push(item)
        //保存到sessionStorage中
        window.sessionStorage.setItem('collectArr',state.collectionArr)
    },
    reduce(state,item){
        state.collectionArr = state.collectionArr.filter(o => o.id !== item.id)
    }
}

export default new Vuex.Store({
    state,
    mutations
})
