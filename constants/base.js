const axios = require('axios');
const https = require('https');

const baseURL = 'https://ios-xe-mgmt.cisco.com:9443/restconf/data';

const restconfReq = axios.create({
	httpsAgent: new https.Agent({
		rejectUnauthorized: false,
	}),
	auth: {
		username: 'username',
		password: 'password',
	},
	headers: {
		'Content-Type': 'application/yang-data+json',
		Accept: 'application/yang-data+json',
	},
});

module.exports = {
	baseURL,
	restconfReq,
};
