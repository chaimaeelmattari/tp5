const mongoose = require('mongoose');

const LivreSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    description: { type: String },
    format: { type: String, enum: ['poche', 'manga', 'audio'], default: 'poche' },
});

const Livre = mongoose.model('Livre', LivreSchema);

module.exports = Livre;
