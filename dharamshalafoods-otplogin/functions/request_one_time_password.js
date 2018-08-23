const admin = require('firebase-admin');
const clickatell = require('./clickatell');

module.exports = function (req, res) {
    if (!req.body.phone) {
        return res.status(422).send({
            error: 'You must provide a phone number'
        });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    admin.auth().getUser(phone)
        .then(userRecord => {
            const code = Math.floor((Math.random() * 899999 + 100000));
            clickatell.sendMessageRest("Your otp is " + code, phone, "OobsxwubTH6yBmuAJrAiMg==");
        }, (err) => {
            if (err) {
                return res.status(422).send(err);
            }
            admin.database().ref('users/' + phone)
                .update({
                    code: code,
                    codeValid: true
                }, () => {
                    res.send({
                        sucess: true
                    });
                });
        })
        .catch((err) => {
            return res.status(422).send({
                error: err
            });
        })
}