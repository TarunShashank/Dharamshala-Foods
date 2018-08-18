const admin =require('firebase-admin');

module.exports = (req, res) => {
    //verify phone number
    if(!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input' });
    }
    //formating phone number 
    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    //creating a new user account using phone number
    admin.auth().createUser({ uid: phone })
     .then( user => res.send(user))
     .catch( err => res.status(422).send({ error : err}));

}