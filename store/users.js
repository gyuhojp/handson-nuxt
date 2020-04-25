export const state = () => ({
      activeUserId: null,
      list: []
    })
    
export const getters = {
    users: (state) => state.list,
    activeUser: (state) => state.list.find((u)=>u.login == state.activeUserId)
}

export const mutations = {
    addUser(state, { user }) {
    state.list.unshift(user)
    },
    setActiveUser(state, { id }) {
    state.activeUserId = id
    }
}

export const actions = {
    async fetchUser({ commit, state }, { id }) {
        const isExistUser = state.list.find((u)=>u.login == id)
        if (isExistUser) return
        const user = await this.$axios.$get(`https://api.github.com/users/${id}`)
        commit('addUser', { user })
    },
    setActiveUser({ commit }, { id }) {
        commit('setActiveUser', { id })
    }
} 