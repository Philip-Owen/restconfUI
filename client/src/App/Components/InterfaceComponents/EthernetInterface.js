import React from 'react';

const EthernetInterface = props => {
	console.log(props.int);
	const {
		name,
		description,
		ipv4,
		'ipv4-subnet-mask': ipv4SNM,
		'admin-status': adminStatus,
		'oper-status': operStatus,
		'phys-address': physAddress,
		'ether-state': etherState,
	} = props.int;
	return (
		<div className="card border-secondary mb-3">
			<div className="card-header">
				{name} is {adminStatus ? (adminStatus === 'if-state-up' ? 'Up' : 'Administratively Down') : ''} /{' '}
				{operStatus ? (operStatus === 'if-oper-state-ready' ? 'Up' : 'Down') : ''}{' '}
				{etherState['negotiated-duplex-mode']} {etherState['negotiated-port-speed'].split('-')[1]}
			</div>
			<div className="card-body text-secondary">
				<p className="card-text">Description: {description}</p>
				<p className="card-text">
					IP Address:{' '}
					{ipv4 && ipv4 !== '' ? (
						<>
							{ipv4} {ipv4SNM}
						</>
					) : (
						'Unassigned'
					)}
				</p>
				<p className="card-text">Physical Address: {physAddress}</p>
				<p className="card-text" />
			</div>
		</div>
	);
};

export default EthernetInterface;
