
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 10
    }
  },
  getters:{

  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions:{

  }
});
export default store;