const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create-users');
const serviceAccount = require('./service-account.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dharamshalafoods-otplogin.firebaseio.com"
  });


exports.createUser = functions.https.onRequest(createUser);