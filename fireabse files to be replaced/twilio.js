
//add this to git ignore
const twilio= require('twilio');

const accountSid='ACf0fcb7ec3fd69c23ef351c1f848bfeca';
const authToken= '0dc3f06aaa6ffad012a392d952841ab7';

module.exports= new twilio.Twilio(accountSid,authToken);