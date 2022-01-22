export const si = require('systeminformation');
export const result=[];

const http = require('http');
const requestListener = function (req, res) {
    if(req.url === '/api/v1/sysinfo')
    {
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(result));
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        return res.end('404 Not Found!!');
    }
}
export const server = http.createServer(requestListener);


([
    // Information sur le CPU
    si.cpu(function (data) {
        result.push(data);
    }),
    // Information Memo
    si.mem(function (data) {
        result.push(data);
    }),
    //Information OS
    si.osInfo(function (data) {
        result.push(data);
    }),
    //currentLoad Information
    si.currentLoad(function (data) {
        result.push(data);
    }),
    //currentLoad Information
    si.diskLayout(function (data) {
        result.push(data);
    }),
    //current
    si.networkInterfaces(function (data) {
        result.push(data);
    })
])
beforeAll(done => {
    done()
  })
  
  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    
    done()
  })
