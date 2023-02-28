let state = {};

export default {
  getState() {
    return state;
  },
  setState(newState) {
    state = {...state, ...newState};
  },
};
