import React from "react";
import "./App.css";
import BrewList from "./components/BrewList";
import { connect } from "react-redux";
import { getBrew } from "./actions/myActions";

function App(props) {
  console.log(props.data);
  return (
    <div className="App">
      <button onClick={props.getBrew}>BREWS!</button>
      <BrewList data={props.data} isFetching={props.isFetching} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getBrew })(App);
