const twilio = require('twilio');
//login to your twilio account and right on load there should be an SID and auth token
//also take this time to navigate to the create phone number menu on the left hand side under the home icon
//and create your new number for outgoing text-messaging 
const accountSid = 'ACf0fcb7ec3fd69c23ef351c1f848bfeca';
const authToken = '0dc3f06aaa6ffad012a392d952841ab7';

module.exports = new twilio.Twilio(accountSid, authToken);