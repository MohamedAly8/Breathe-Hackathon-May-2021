import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../containers/home.js';

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
            {/* <Route path="/analysis" exact component ={Analysis} />
            <Route path="/breathe" exact component ={Analysis} /> */}
		</Switch>
	</Router>
);

export default Routes;
