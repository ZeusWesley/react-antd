import React from "react";
import { Route, Redirect } from "react-router";
import { getToken } from "../components/LocalData";

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={({ props, location }: any) =>
      getToken() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
