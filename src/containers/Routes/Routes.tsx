import React, { FC } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Form from '../Form/Form';
import './Routes.scss';
import Summary from '../Summary/Summary';

const Routes: FC<any> = () => {
  return (
    <div className="Routes-container">
      <HashRouter history={history}>
        <Switch>
          <Route path="/check-in" component={Form} exact={true} />
          <Route path="/summary" component={Summary} exact={true} />
          <Redirect to="/check-in" />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Routes;
