import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router";
// STYLES
import "./app.scss";
// PAGES
const ComingSoonPage = lazy(() => import("src/pages/coming-soon/ComingSoon"));

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={ComingSoonPage} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
