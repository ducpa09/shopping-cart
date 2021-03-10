
import state from './state'
import actions from './actions';
import mutations from './mutation';
import getters from './getters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
