const firestoreService = require('firestore-export-import');
const admin = require('firebase-admin');
// files
const firebaseConfig = require('./config');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// declare JSON to Firestore function
async function jsonToFirestore() {
  try {
    console.log('Initializing Firebase...');
    firestoreService.initializeApp(serviceAccount, firebaseConfig.projectId);
    console.log('Firebase initialized!');

    console.log('Uploading postal_array.json...');
    await firestoreService.restore('./postal_array.json'); // ganti .JSON data disini
    console.log('postal_array.json uploaded!');
  } catch (err) {
    console.error(err);
  }
}

// call function
jsonToFirestore();
