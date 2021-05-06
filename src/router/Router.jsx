import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../components/Home';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page1Detaila from '../components/Page1DetailA';
import Page1Detailb from '../components/Page1DetailB';

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route exact path={`${url}/detailA`}>
                <Page1Detaila />
              </Route>
              <Route exact path={`${url}/detailB`}>
                <Page1Detailb />
              </Route>
            </Switch>
          )} />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </>
  )
}

export default Router
