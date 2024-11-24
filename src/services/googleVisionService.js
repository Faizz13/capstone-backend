const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const analyzeImage = async (base64Image) => {
  const [result] = await client.labelDetection({ image: { content: base64Image } });
  const labels = result.labelAnnotations;
  
  // Simulasi analisis, menggantikan hasil dari Google Vision API
  const description = labels.map(label => label.description).join(', ');
  const playInstructions = 'Play by following traditional methods.';
  
  return { description, playInstructions };
};

module.exports = { analyzeImage };
