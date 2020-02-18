const os = require("os");


module.exports.httpOptions = {
    hostname: 'localhost',
    port: 9998,
    path: '/',
    method: 'POST',
}

//reference: https://nodejs.org/api/process.html
const getProcessData = (process) => 
    ({
        memoryUsage: process.memoryUsage()
    })


///This may actually show down program time....
// also you would need to "require" the os module at the top of this page
//reference: https://nodejs.org/api/os.html
const getOSData = (os) => 
    ({
        hostname: os.hostname()
    })

module.exports.getMetaData = (capturedLineData) => {

    const data = {
        capturedLineData,
        processData: getProcessData(process),
        OSData: getOSData(os)
    }
    return data
}