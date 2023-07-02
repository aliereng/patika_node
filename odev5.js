const http = require('http');
const port = 5000;


const server = http.createServer((req,res)=> {
    const url = req.url;
    if(url == "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>index sayfasina hosgeldiniz</h2>");
        res.end();
    }
    else if(url == "/hakkimda"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>hakkimda sayfasina hosgeliniz</h2>");
        res.end();
    }
    else if(url == "/iletisim"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>iletisim sayfasina hosgeliniz</h2>");
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("sayfa bulunamadı");
        res.end();
    }

})

server.listen(port,()=>{
    console.log(`server start on ${port} port`) 
})