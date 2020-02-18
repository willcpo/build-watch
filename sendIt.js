const {httpOptions} = require("./metadata")
const http = require("http");

module.exports = (data) => {

    // initiate request and configure http connection 
    const req = http.request(httpOptions)
    
    // error call
    req.on('error', (error) => {
      console.error(error)
    })

    //send data and end connection
    req.end(JSON.stringify(data))
}