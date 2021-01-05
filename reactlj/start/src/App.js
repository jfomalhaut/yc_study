import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Page1 from './routers/Page1';
import Page2 from './routers/Page2';
import Counter from './routers/Counter';
import Phonebook from './routers/Phonebook';

const App = () => {

	return (
		<Router>
			<header>
				<ul>
					<li>
						<Link to="/page1">Page1</Link>
					</li>
					<li>
						<Link to="/page2">Page2</Link>
					</li>
					<li>
						<Link to="/counter">Counter</Link>
					</li>
					<li>
						<Link to="/phonebook">Phonebook</Link>
					</li>
				</ul>
			</header>
			<Switch>
				<Route path="/page1" render={(props) => (
					<Page1 history={props.history} />
				)} />

				<Route path="/page2" component={Page2} />
				<Route path="/counter" component={Counter} />
				<Route path="/phonebook" component={Phonebook} />
			</Switch>
		</Router>
	);
};

export default App;