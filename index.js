/*
 *    Title: Uptime Monitoring Application
 *    Description: A RESTFul API to monitor up or down time of user definded links.
 *    Author: MD. Mahiuddin Tuhin
 *    Date: 06/11/22
 */

// dependencies

const http = require('http');
const url = require('url');
// app object - module scaffolding

const app = {};

// configuration

app.config = {
    port: 3000,
};

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port number ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimmedPath);
    // response handle
    res.end('Hello worldy');
};
// start the server

app.createServer();
