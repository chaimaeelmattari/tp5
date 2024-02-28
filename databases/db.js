const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(
            'mongodb+srv://user_tp5:owQDjTwwpgPIma7D@cluster0.1qap3hm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Connexion à MongoDB utilisant Mongoose!');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = { connectToDatabase };
