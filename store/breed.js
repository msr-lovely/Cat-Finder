export const state = () => ({
    list: []
  })
  
export const mutations = {
    load(state, list) {
        if (state.list.length > 0) return;
        state.list = list
    }
}
  