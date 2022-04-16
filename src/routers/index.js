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

const renderRoutes = (routes, university) =>
  routes ? (
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        return (
          <Suspense fallback={<>...</>}>
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <>
                  <Header />
                  <Component university={university} {...props} />
                  <Footer />
                </>
              )}
            />
          </Suspense>
        );
      })}
    </Switch>
  ) : null;

function Routes({ university }) {
  return renderRoutes(routesConfig, university);
}
export default Routes;
