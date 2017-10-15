const hapi = require('hapi');
const router = require('hapi-router');

const server = new hapi.Server();

exports.keyJwt = (Math.random()*999).toString();

server.connection({
    port: 3002,
    host: 'localhost'
});

server.register({ register: router, options: { routes: 'src/**/route.js' } }, (err) =>{
    if(err){
     throw err.message;
    }
    server.start((err) => {
        if (err) {
            throw err.message;
        }
        console.log(`Servidor Rodando em ${server.info.uri}`);
    });
});
