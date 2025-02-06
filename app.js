const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Hello welcome to the Pegasus's page")
        return;
    }
    if(req.url === '/about'){
        res.end("This is the about page")
        return;
    }
    if(req.url === '/profile'){
        res.end("This is the profile page")
        return;
    }
    res.end(
        `<h1>Opps!!!!</h1>
        <p>There have been an error</p>
        <a href='/'> Back home</a>`
    )
})
server.listen(5000);