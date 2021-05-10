import React from "react";
import { withRouter } from "react-router-dom";
import AppRoute from "./routes"
import "./app.scss"

const App = (props) => {
  return <div className="appContainer">
    <AppRoute {...props} />
  </div>
}

export default App