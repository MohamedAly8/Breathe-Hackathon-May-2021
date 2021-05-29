import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/home.js';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		{/* <Route path="/analysis" exact component ={Analysis} />
            <Route path="/breathe" exact component ={Analysis} /> */}
	</Switch>
);

export default Routes;
