
// protoclo de intercambio
var http =require('http');
//creando el servidor mediante el protocolo HTTP

var server=http.createServer();

//servicio web
function mensaje(req,resp){

    //estado 200 de tipo satisfactorio, mensaje de tipo plano configurado mediante json
    resp.writeHead(200,{'content-type':'text/plain'});
    //escribo el mensaje en texto plano
    resp.write('HOLA MUNDO');
    //finalice la comunicacion entre el cliente y el servidor
    resp.end();
}

server.on('request',mensaje);
server.listen(3000,function(){
    console.log("la solicitud fue realizada mediante el puerto 3000");
})
