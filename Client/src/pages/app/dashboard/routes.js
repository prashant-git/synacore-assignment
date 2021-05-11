import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ROUTE } from '../../../configs/constants/constants'
import DashboardContainer from '../dashboard/container/DashboardContainer'
import { DetailsPageContainer } from '../dashboard/container/DetailsPageContainer'

const routes = [
  {
    path: ROUTE.dashboard,
    exact: true,
    component: DashboardContainer
  },
  {
    path: `${ROUTE.detailsPage}/:id?`,
    exact: false,
    component: DetailsPageContainer
  }
]

const AppRoute = () => {
  const renderRoutes = (props) => {
    return routes.map((route, index) => {
      return <Route
        key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
        {...props}
      />
    })
  }
  return (
    <Switch>
      {renderRoutes()}
    </Switch>
  )
}

export default AppRoute;
