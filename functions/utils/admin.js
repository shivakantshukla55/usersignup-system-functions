const admin = require('firebase-admin');

var serviceAccount = require('../signup-system-6dafe-firebase-adminsdk-lrjs7-74b37fe37d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://signup-system-6dafe.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
