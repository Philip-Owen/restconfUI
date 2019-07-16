const express = require('express');
const path = require('path');

const apiRoutes = require('./routes/apiRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log('App is up on port ' + port));
