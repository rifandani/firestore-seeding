const admin = require('firebase-admin');
// const { v4: uuidv4 } = require('uuid');
// files
// const citiesArr = require('./cities3.json');
const { makeRoompies } = require('./test2');
let roompies = [];

const serviceAccount = require('./serviceAccount.json');

// firebase -> project settings -> service accounts -> firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://roompy-roompies-default-rtdb.firebaseio.com',
});

// const postals = myJson.postals; // postals arr => length 81248
const db = admin.firestore();

// add cities array to firestore
// citiesArr.forEach(async (city, i) => {
//   try {
//     const docRef = db.collection('cities').doc(uuidv4());

//     console.log(`Loop #${i} => Uploading doc: ${docRef.id}`);
//     await docRef.set(city);
//   } catch (err) {
//     console.error(err);
//   }
// });

async function seedRoompies() {
  try {
    const docRef = db.collection('roompies');

    // make roompies
    await makeRoompies(10, roompies);

    const rLength = roompies.length;
    for (let i = 0; i < rLength; i++) {
      const newR = await docRef.add(roompies[i]);
      console.log(`Loop #${i} => Uploading doc: ${newR.id}`);
    }
  } catch (err) {
    console.error(err);
  }
}

seedRoompies();
