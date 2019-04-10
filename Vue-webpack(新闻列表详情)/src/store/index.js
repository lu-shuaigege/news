import Vue from 'vue'
import Vuex from 'vuex'

// 安装Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'hello world'
    },
    mutations: {
        modifyMsg(state, obj) {
            state.msg += `,${obj.name}`;
        }
    }
})
