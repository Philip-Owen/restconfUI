import React from 'react';

export default function Interface(props) {
	const { name, description } = props.int;

	const interfaceIsUp = int => {
		return int['admin-status'] === 'if-state-up' && int['oper-status'] === 'if-oper-state-ready' ? 'up' : 'down';
	};

	return (
		<div className="row">
			<div className="col col-sm">
				<p className="name">{name}</p>
			</div>
			<div className="col col-sm">
				<p>{description}</p>
			</div>
			<div className="col col-sm">
				<p>
					<span className={interfaceIsUp(props.int)}>&#9673;</span> {interfaceIsUp(props.int)}
				</p>
			</div>
		</div>
	);
}
