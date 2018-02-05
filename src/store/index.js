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
        if(state.collectionArr.length === 0){
            state.collectionArr.push(item)
        }else{
            if(JSON.stringify(state.collectionArr).indexOf(JSON.stringify(item.media_user)) === -1){
                state.collectionArr.push(item)
            }
        }
        window.sessionStorage.setItem('collectData',JSON.stringify(state.collectionArr))
    },
    reduce(state,item){
        let collectData =  JSON.parse(window.sessionStorage.getItem('collectData'))
        collectData = collectData.filter(o => o.id !== item.id)
        window.sessionStorage.setItem('collectData',JSON.stringify(collectData))
        state.collectionArr = collectData
        console.log(collectData)
    }
}

export default new Vuex.Store({
    state,
    mutations
})
