const initialState = {
  products: [],
  error: null
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        products: Array.isArray(action.payload) ? action.payload : [],
        error: null
      };

    case "fail":
      return {
        ...state,
        products: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default Reducers;
