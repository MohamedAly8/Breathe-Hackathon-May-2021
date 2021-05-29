import './css/App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Routes from './config/routes';
import Login from './containers/login';

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<Login />
				</header>
				<Routes />
			</Router>
		</div>
	);
}

export default App;
