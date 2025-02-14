const express = require('express');
const packageJson = require('./package.json');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log('server started on port 5000');
});

app.get('/version', (req, res) => {
    res.send(packageJson.version); // change this string to ensure a new version deployed
});
