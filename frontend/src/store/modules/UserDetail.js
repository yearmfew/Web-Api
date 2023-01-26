import axios from "@/config/custom_axios";
const state = () => ({
  user: {},
});

const mutations = {
  USER_DATA_SAVE(state, payload) {
    let user = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      title: payload.title,
    };
    state.user = user;
  },
};

const actions = {
  async fetchUserData({ commit }, userId) {
    const request = await axios.get(`/user/${userId}`);
    commit("USER_DATA_SAVE", request.data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
