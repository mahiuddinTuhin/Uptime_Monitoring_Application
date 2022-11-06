/*
 *    Title: Uptime Monitoring Application
 *    Description: A RESTFul API to monitor up or down time of user definded links.
 *    Author: MD. Mahiuddin Tuhin 😊
 *    Date: 06/11/22
 */
// dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
/** ********************************************app object - module scaffolding
 */
const app = {};
/** ********************************************configuration
 */
app.config = {
    port: 3000,
};

/** ********************************************create server
 */

app.createServer = () => {
    /*   1. initial a server with giving a function as parametere0 */
    const server = http.createServer(app.handleReqRes);
    /* 2. listening the server on specific port */
    server.listen(app.config.port, () => {
        console.log(`listening to port number ${app.config.port}`);
    });
};

// handle request response
/*
   3. ......
*/
app.handleReqRes = handleReqRes;
// start the server

app.createServer();
