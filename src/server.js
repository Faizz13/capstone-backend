const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const { uploadToyImage } = require('./controllers/toyController');
const { initializeFirestore } = require('./services/firestoreService');
const { analyzeImage } = require('./services/googleVisionService');

// Inisialisasi Firestore
initializeFirestore();

const init = async () => {
  const server = Hapi.server({
    port: 4159,
    host: '0.0.0.0',
        routes: {
            cors: {
              origin: ['*'],
            },
        },
    });

  // Definisikan rute API
  server.route({
    method: 'POST',
    path: '/upload',
    handler: uploadToyImage,
    options: {
      validate: {
        payload: Joi.object({
          image: Joi.string().required(),  // Gambar dalam bentuk base64
        }),
      },
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
