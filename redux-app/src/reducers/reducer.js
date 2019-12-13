const initialState = {
  data: [],
  isFetching: false,
  error: ""
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BREWERY_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_BREWERY_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default reducer;
