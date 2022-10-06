const http=require("http");


const serve =http.createServer((request,response) =>
{
    response.write("hello");
    

    response.end();

}).listen(8081);

    console.log("liseining to the port")