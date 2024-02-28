const Livre = require('../modele/livre');

//Read
async function getAllLivre(request, reply) {
    try {
        const livres = await Livre.find({}, { _id: 0, __v: 0 });

        if (livres.length === 0) {
            reply.send({ message: 'Aucun livre trouvé.' });
        } else {
            const formattedLivres = JSON.stringify(livres, null, 2);
            reply.header('Content-Type', 'application/json').send(formattedLivres);
        }
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}



//Read
async function getLivreById(request, reply) {
    try {
        const livre = await Livre.findById(request.params.id, { _id: 0, __v: 0 });
        if (!livre) {
            reply.status(404).send({ error: 'Livre non trouvé !' });
            return;
        }
        reply.send(livre);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}



//Create
async function addLivre(request, reply) {
    try {
        const newLivre = new Livre(request.body);
        await newLivre.save();
        reply.status(201).send(newLivre);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}

//Update
async function updateLivre(request, reply) {
    try {
        const updatedLivre = await Livre.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedLivre) {
            reply.status(404).send({ error: 'Livre non trouvé' });
            return;
        }
        reply.send(updatedLivre);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}

//Delete
async function deleteLivre(request, reply) {
    try {
        const deletedLivre = await Livre.findByIdAndDelete(request.params.id);
        if (!deletedLivre) {
            reply.status(404).send({ error: 'Livre non trouvé' });
            return;
        }
        reply.send({ message: 'Livre supprimé avec succès' });
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
}

module.exports = { getAllLivre, getLivreById, addLivre, updateLivre, deleteLivre };
