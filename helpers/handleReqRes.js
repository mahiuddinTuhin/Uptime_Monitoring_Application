/*
 *    Title: Handle request and response
 *    Description: Handle request and response.
 *    Author: MD. Mahiuddin Tuhin 😊
 *    Date: 06/11/22
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
// module scaffolding

const handler = {};
handler.handleReqRes = (req, res) => {
    /*
        request handling
    */
    /*
        4. get the url and parse it
    */
    const parsedUrl = url.parse(req.url, true);

    /*
        5. get pathname of the url
    */
    const path = parsedUrl.pathname;
    /*
        6. getting trimmed pathname that extract '/' from the begining and starting of the pathname
        by with '/^\/+|\/+$/g' regex
     */
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    /*
        7. getting method get/post etc on lower case
    */
    const method = req.method.toLowerCase();
    /*
        8. getting all the query string
    */
    const queryStringObject = parsedUrl.query;
    /*
        9. getting headers
    */
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    /*
        to-get buffer data here set a listen 🐇
    */
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    /*
    when buffer finished end will fire and decoder.write need to stop with decoder.end() */
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('Hello worldy');
    });

    // console.log(headerObject);

    // response handle
};
module.exports = handler;
