const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res)=>{
if (req.method === 'GET' ){
    const nombre = req.url.split('?')[0]
    const edad = req.url.split('?')[1]
    const eleccion = req.url.split('?')[2]
    res.writeHead(200,{'Content-Type': 'text/plain'});
    
   if(edad>=18){
    res.end('hola '+ nombre+' Si eres mayor de edad\n' );
    fs.writeFile('texto1.txt','Archivo creado desde NODE')
    'Documento creado'
   }else if (eleccion == si){
    res.end('hola '+ nombre+' No eres mayor de edad\n' )

   }
    
}else {
    res.writeHead(404,{'Conten-Type': 'text/plain'})
    res.end('404 Not Found\n');
}    
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });