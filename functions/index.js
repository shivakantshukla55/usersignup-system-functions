const functions = require('firebase-functions');

const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');



const app = require('express')();

//FIXME if not using
const FBAuth = require('./utils/FBAuth');

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);


exports.api = functions.https.onRequest(app);
