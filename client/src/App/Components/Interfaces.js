import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InterfacesHeader from './InterfaceComponents/InterfacesHeader';
import InterfaceListItem from './InterfaceComponents/InterfaceListItem';

export default class Interfaces extends Component {
	state = {
		interfaces: [],
		updated: false,
	};

	async getInterfaces() {
		const { updated } = this.state;
		let response = await fetch('/api/interfaces');
		let responseJson = await response.json();
		let interfaces = responseJson['Cisco-IOS-XE-interfaces-oper:interface'];
		this.setState({ interfaces, updated: !updated });
	}

	interfaceIsUp(int) {
		return int['admin-status'] === 'if-state-up' && int['oper-status'] === 'if-oper-state-ready'
			? 'int-up'
			: 'int-down';
	}

	componentDidMount() {
		this.getInterfaces();
	}

	render() {
		const { interfaces, updated } = this.state;
		return (
			<div className="container">
				{!updated ? (
					<h4>Loading Interfaces...</h4>
				) : (
					<div>
						<h3>Interfaces:</h3>
						<InterfacesHeader />
						<div />
						<ul className="list-group">
							{interfaces.map(int =>
								int['interface-type'].includes('other') ? (
									''
								) : (
									<Link
										to={{
											pathname: `/interface-details/${int.name}`,
										}}
										key={int.name}
									>
										<li
											className={`list-group-item list-group-item-action ${this.interfaceIsUp(
												int
											)}`}
										>
											<InterfaceListItem className="row" int={int} />
										</li>
									</Link>
								)
							)}
						</ul>
					</div>
				)}
			</div>
		);
	}
}
