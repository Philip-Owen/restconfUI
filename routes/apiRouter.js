const express = require('express');
const router = express.Router();

// References Resconf url and axios config needed to connect and pull information from the device.
// const { baseURL, restconfReq } = require('../constants/base');

// References cached Restconf requests from Devnet Sandbox
const { nativeFiltered, interfaces } = require('../MockData');

router.get('/deviceInfo', (req, res) => {
	// Original request to retrieve information directly from device Restconf API
	// const url = `${baseURL}/native?fields=hostname;version`;
	// restconfReq.get(url).then(response => res.send(response.data));

	// Cached data response. Mocks response from request above.
	res.send(nativeFiltered);
});

router.get('/interfaces', (req, res) => {
	// Original request to retrieve information directly from device Restconf API
	// const url = `${baseURL}/interfaces/interface`;
	// restconfReq.get(url).then(response => res.send(response.data));

	// Cached data response. Mocks response from request above.
	res.send(interfaces);
});

router.get('/interface/:id', (req, res) => {
	// Original request to retrieve information directly from device Restconf API
	// const url = `${baseURL}/interfaces/interface=${req.params.id}`;
	// restconfReq.get(url).then(response => res.send(response.data));

	// Cached data response. Mocks response from request above.

	const interfaceDetails = {};

	let findInterface = interfaces['Cisco-IOS-XE-interfaces-oper:interface'].filter(int => int.name === req.params.id);

	interfaceDetails['Cisco-IOS-XE-interfaces-oper:interface'] = findInterface[0];
	interfaceDetails['Cisco-IOS-XE-interfaces-oper:interface'].name ? res.send(interfaceDetails) : res.sendStatus(404);
});

module.exports = router;
