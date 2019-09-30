export const state = ()=>({
  contacts_data: []
})

export const getters = {

}

export const mutations = {
  setContacts({state}, data){
    this.state.contacts_data = data;
  }
}

export const actions = {
  nuxtServerInit ({commit, dispatch}) {
    console.log('init')   
  },
  async getContacts({commit}){
    const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
    commit('setContacts', response);   
  }
}