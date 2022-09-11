const Router = require('express');
const router = Router();

const mailCtrl = require('../controller/mail.controller');

router.post('/sendmail', mailCtrl.sendMail)

module.exports = router