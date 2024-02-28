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
const routes = require('./routes/routes');

fastify.register(require('@fastify/cors'));

// Register your routes
fastify.register(routes);

fastify.listen(3000, '0.0.0.0', (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
});

fastify.ready(() => {
    connectToDatabase();
});
