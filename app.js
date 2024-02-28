const fs = require('fs');
const fastify = require('fastify')({
    https: {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem'),
        passphrase: 'bonjour',  //mot de passe du fichier key.pem
    },
});

const { connectToDatabase } = require('./databases/db');
const Book = require('./modele/livre');

fastify.register(require('@fastify/cors'));

fastify.get('/', async (request, reply) => {
    return { message: 'Hello, c est ton premier serveur Fastify!' };
});

fastify.listen(3000, '0.0.0.0', (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
});

fastify.ready(() => {
    connectToDatabase();
});
