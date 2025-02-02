const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Hello welcome to the Pegasus Page")
        return;
    }
    if(req.url === '/about'){
        res.end("This is the about page")
        return;
    }
    if(req.url === '/profile'){
        res.end("The is the profile page")
        return;
    }
    res.end(
        `<h1>Opsss!!!</h1>
        <p>There have been an error</p>
        <a href='/'> back home </a>`
    )

})


server.listen(5000);