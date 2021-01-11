import React, { FC } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import history from './history';
import Form from '../Form/Form';
import './Routes.scss';

const Routes: FC<any> = () => {
  return (
    <div className="Routes-container">
      <HashRouter history={history}>
        <Switch>
          <Route path="/" component={Form} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Routes;
