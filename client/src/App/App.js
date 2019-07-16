import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DeviceInfo from './Components/DeviceInfo';
import Interfaces from './Components/Interfaces';
import InterfaceDetails from './Components/InterfaceComponents/InterfaceDetails';



function App() {
	return (
		<div className="App">
			<DeviceInfo />
			<Switch>
				<Route exact path="/" component={Interfaces} />
				<Route path="/interface-details" component={InterfaceDetails} />
			</Switch>
		</div>
	);
}

export default App;
