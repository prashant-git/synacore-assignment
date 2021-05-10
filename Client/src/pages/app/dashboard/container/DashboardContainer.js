import React, { useEffect, withRouter } from "react";
import { Home } from "../components/Home"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DashboardContainer = (props) => {
  return <div >
    <Home {...props} />
  </div>
}

export default DashboardContainer