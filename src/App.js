import React from "react";
import Nav from "./components/Nav";
import Address from "./components/Address";
import Pick from "./components/Pick";
import Maintable from "./components/Datatable.js";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Address />
      <Pick />
      <Maintable />
    </React.Fragment>
  );
}
export default App;
