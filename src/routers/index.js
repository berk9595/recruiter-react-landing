import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const routesConfig = [
  {
    component: lazy(() => import("../pages/Landing.js")),
    exact: true,
    path: "/",
  },
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<>...</>}>
      <Switch>
        {routes.map((route, i) => {
          const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <>
                  <Header />
                  <Component {...props} />
                  <Footer />
                </>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}
export default Routes;
