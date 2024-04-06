const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('request received');
	res.status(200).json({'Hello World!' : 'Hello World!'});
});

app.listen(3000, () => {
	console.log('server started');
});