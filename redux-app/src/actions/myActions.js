import axios from "axios";

export const getBrew = () => dispatch => {
  dispatch({ type: "FETCH_BREWERY_START" });
  axios.get("https://api.openbrewerydb.org/breweries").then(res => {
    console.log(res.data);
    dispatch({ type: "FETCH_BREWERY_SUCCESS", payload: res.data });
  });
};
