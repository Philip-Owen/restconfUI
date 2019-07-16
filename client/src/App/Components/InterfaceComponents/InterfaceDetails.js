import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoopbackInterface from './LoopbackInterface';
import EthernetInterface from './EthernetInterface';

export default class InterfaceExpanded extends Component {
	state = {
		interfaceDetails: {},
	};

	async getInterfaceExpandedInfo() {
		const name = this.props.location.pathname.split('/')[2];
		let response = await fetch(`/api/interface/${name}`);
		let responseJson = await response.json();
		let interfaceDetails = responseJson['Cisco-IOS-XE-interfaces-oper:interface'];
		this.setState({ interfaceDetails });
	}

	componentDidMount() {
		this.getInterfaceExpandedInfo();
	}

	renderInterfaceTemplate(int) {
		const type = int['interface-type'];
		if (type.includes('loopback')) {
			return <LoopbackInterface int={int} />;
    }
    if (type.includes('ethernet')) {
			return <EthernetInterface int={int} />;
		}
	}

	render() {
		const { interfaceDetails } = this.state;

		return (
			<div className="container">
				<Link to="/">Back to Interfaces</Link>
				<div className="row justify-content-center">
					<div className="col col-md-6">
						{interfaceDetails['interface-type'] ? this.renderInterfaceTemplate(interfaceDetails) : ''}
					</div>
				</div>
			</div>
		);
	}
}
