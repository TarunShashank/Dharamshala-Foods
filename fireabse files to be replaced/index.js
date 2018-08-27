const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create-users');
const serviceAccount = require('./service-account.json');
const requestOneTimePassword = require('./request_one_time_password');
const Rest = require('./api/rest');

module.exports = {
   
    sendMessageRest: function (content, to, apiKey) {
        var rest = new Rest();
        var sendMessageRest = rest.sendMessage(content, to, apiKey)
        return sendMessageRest;
    }
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dharamshalafoods-otplogin.firebaseio.com"
  });


exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);