// 1. explicacion de averiguar el nombre del computador
// const os = require('os')
// console.log(os.hostname())
// 2. explicacion para crear archivocon node
// const fs = require('fs')
// fs.writeFile('texto1.txt','Archivo creado desde NODE')
// console.log('Documento creado')
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split('?')[1];
    const edad = req.url.split('?')[2];
    const eleccion = req.url.split('?')[3];
  
    if(edad>=18) {
      res.end('hola ' + nombre + ' eres mayor de edad\n');
      fs.appendFileSync('texto2.txt', `${nombre} archivo creado usando librerias de NODE en ejercicio para practicas\n`)
    } else if(eleccion == 'si'){
      res.end('hola ' + nombre + ' eres menor de edad y no tienes permisos.\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});