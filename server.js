const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/neo-explorer'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: './dist/neo-explorer/'}
);
});

app.listen(process.env.PORT || 8080),
	() => console.log("Server is running...");
