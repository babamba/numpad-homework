import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import MainPage from "../pages/Main.page";
import CompletePage from "../pages/Complete.page";

const Routes = () => {
  return (
    <Switch>
      <Route path={["/", "/main"]} exact={true} component={MainPage} />
      <Route path={"/complete"} exact={true} component={CompletePage} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default Routes;
