import React, { Component } from 'react';

export default class DeviceInfo extends Component {
	state = {
		hostname: '',
		verion: '',
		updated: false,
	};

	async getDeviceInfo() {
		const { updated } = this.state;
		let response = await fetch('/api/deviceInfo');
		let responseJson = await response.json();
		const { hostname, version } = responseJson['Cisco-IOS-XE-native:native'];
		this.setState({ hostname, version, updated: !updated });
	}

	componentDidMount() {
		this.getDeviceInfo();
	}
	render() {
		const { hostname, version, updated } = this.state;
		return (
			<div>
				{!updated ? (
					<p>Loading</p>
				) : (
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<span className="navbar-brand" styles={'margin-bottom: 0px'}>
							<b>Hostname:</b> {hostname} <b>Version:</b> {version}
						</span>
					</nav>
				)}
			</div>
		);
	}
}
