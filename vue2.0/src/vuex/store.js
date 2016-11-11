import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import M1 from './modules/m1/index'

export default new Vuex.Store({
	modules:{
		...M1
	}
})
