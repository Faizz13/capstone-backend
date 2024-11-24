const { analyzeImage } = require('../services/googleVisionService');
const { saveToy } = require('../services/firestoreService');

const uploadToyImage = async (request, h) => {
  const { image } = request.payload;
  
  try {
    // Analisis gambar dengan Google Vision API
    const analysisResult = await analyzeImage(image);
    const { description, playInstructions } = analysisResult;

    // Simpan data mainan di Firestore
    const toy = await saveToy({
      description,
      playInstructions,
      image,
    });

    return h.response({
      message: 'Toy uploaded successfully',
      toy,
    }).code(201);

  } catch (err) {
    console.error(err);
    return h.response({ error: 'Failed to process image' }).code(500);
  }
};

module.exports = { uploadToyImage };
