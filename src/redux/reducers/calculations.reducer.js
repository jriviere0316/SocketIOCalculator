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
  
  export default taskReducer;
  