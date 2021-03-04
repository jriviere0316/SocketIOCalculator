const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EQUATIONS':
        return action.payload;
      case 'UNSET_EQUATIONS':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default taskReducer;
  