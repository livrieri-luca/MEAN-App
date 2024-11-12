const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, '../client-angular/dist/client-angular')));

// Set API response
app.get('/api', (req, res) => {
    var jsonData = {"results": ["Important 1 ","Thing 2"]};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.send('app works!');
});

// Listen on the default port (3000)
app.listen(50000, () => {
    console.log('Example app listening on port 3000!');
});