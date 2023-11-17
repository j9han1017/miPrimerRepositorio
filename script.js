// 1. explicacion de averiguar el nombre del computador
// const os = require('os')
// console.log(os.hostname())
// 2. explicacion para crear archivocon node
// const fs = require('fs')
// fs.writeFile('texto1.txt','Archivo creado desde NODE')
// console.log('Documento creado')
const data = {
    "users": [
      {
        "id": 1,
        "name": "Alice",
        "age": 25,
        "email": "alice@example.com"
      },
      {
        "id": 2,
        "name": "Bob",
        "age": 30,
        "email": "bob@example.com"
      },
      {
        "id": 3,
        "name": "Charlie",
        "age": 28,
        "email": "charlie@example.com"
      }
    ]
  }

const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res)=>{
if (req.method === 'GET' ){
    const nombre = req.url.split('?')[0]
    const edad = req.url.split('?')[1]
    const mensajeMayor =('hola '+ nombre +' Eres mayor de edad\n')
    const mensajeMenor =('hola '+ nombre+' Eres menor de edad\n')
    res.writeHead(200,{'Content-Type': 'text/plain'});

   if(edad>=18){
    res.end( );
   }else{
    res.end('hola '+ nombre+' Eres menor de edad\n' )

   }
    
}else {
    res.writeHead(404,{'Conten-Type': 'text/plain'})
    res.end('404 Not Found\n');
}    
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
