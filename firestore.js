const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
// files
// const myJson = require('./postal_array.json');
const citiesArr = require('./cities3.json');

const serviceAccount = require('./serviceAccount.json');

// firebase -> project settings -> service accounts -> firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://roompy-roompies-default-rtdb.firebaseio.com',
});

// const postals = myJson.postals; // postals arr => length 81248
const db = admin.firestore();
// const dummy = [
//   {
//     city: 'Balikpapan',
//     code: 76111,
//   },
//   {
//     city: 'Yogyakarta',
//     code: 56222,
//   },
//   {
//     city: 'Sleman',
//     code: 85311,
//   },
// ];

citiesArr.forEach(async (city, i) => {
  try {
    const docRef = db.collection('cities').doc(uuidv4());

    console.log(`Loop #${i} => Uploading doc: ${docRef.id}`);
    await docRef.set(city);
  } catch (err) {
    console.error(err);
  }
});

// contoh add data to firestore
// const docRef = db.collection('users').doc('my-unique-id');
// await docRef.set({
//   first: 'Tri',
//   last: 'Rifandani',
//   born: 1988,
// });

// contoh read data firestore
// const snapshot = await db.collection('users').get();
// snapshot.forEach((doc) => {
//   console.log(doc.id, '=>', doc.data());
// });
