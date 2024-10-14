const http = require('http');
const PORT = process.env.PORT || 4000;
const server = http.createServer(
    (request,response)=>{
        response.writeHead(200,{
            "content-type":"text/plain"
        });
        response.end("Hello");
    }
)
server.listen(PORT,()=>{
    console.log("Server is ready and listening at port", PORT);
})
server.on('error',(error)=>{
    if(error.code === 'EADRINUSE'){
        console.log('Port already in Use ');
    }
})