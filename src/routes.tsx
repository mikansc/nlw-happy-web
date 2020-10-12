import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default Routes;
