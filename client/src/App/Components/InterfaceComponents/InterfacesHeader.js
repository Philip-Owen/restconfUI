import React from 'react';

const InterfacesHeader = () => {
	return (
		<li className="list-group-item list-group-item-action">
			<div className="row">
				<div className="col col-sm">
					<p>
						<b>
							<u>Interface</u>
						</b>
					</p>
				</div>
				<div className="col col-sm">
					<p>
						<b>
							<u>Description</u>
						</b>
					</p>
				</div>
				<div className="col col-sm">
					<p>
						<b>
							<u>Status</u>
						</b>
					</p>
				</div>
			</div>
		</li>
	);
};

export default InterfacesHeader;
