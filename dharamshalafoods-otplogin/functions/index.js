const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create-users');
const serviceAccount = require('./service-account.json');
var Http = require("./api/http");
var Rest = require('./api/rest');

module.exports = {
    sendMessageHttp: function (content, to, apiKey) {
        var http = new Http();
        var sendMessageHttp = http.sendMessage(content, to, apiKey);
        return sendMessageHttp;
    },
    sendMessageRest: function (content, to, apiKey) {
        var rest = new Rest();
        var sendMessageRest = rest.sendMessage(content, to, apiKey)
        return sendMessageRest;
    }
    // more methods coming
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dharamshalafoods-otplogin.firebaseio.com"
  });


exports.createUser = functions.https.onRequest(createUser);