const livreController = require('../controllers/LivreController');

async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        return { message: 'Hello, c est ton premier serveur Fastify!' };
    });

    fastify.get('/livres', livreController.getAllLivre);
    fastify.get('/livres/:id', livreController.getLivreById);
    fastify.post('/livres', livreController.addLivre);
    fastify.put('/livres/:id', livreController.updateLivre);
    fastify.delete('/livres/:id', livreController.deleteLivre);
}

module.exports = routes;
