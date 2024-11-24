const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

const initializeFirestore = () => {
  // Setup Firestore Client
  console.log('Firestore initialized');
};

const saveToy = async (toyData) => {
  const toysCollection = firestore.collection('toys');
  const docRef = toysCollection.doc(); // Auto generate ID

  await docRef.set(toyData);
  return { id: docRef.id, ...toyData };
};

module.exports = { initializeFirestore, saveToy };
