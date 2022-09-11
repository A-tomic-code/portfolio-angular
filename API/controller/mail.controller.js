const nodemailer = require('nodemailer');
const address = 'danielvazquezheredia1994@gmail.com';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: address,
        pass: "ubcpodfyfyvchgqh"
    }
});

function sendMail(req, res){
    console.log(req.body)
    let mensaje = req.body.text;

    let mailOptions = {
        from: address,
        to: address,
        subject: 'PORTFOLIO FORM',
        text: mensaje
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
            res.send(error(err.message))
        }else{
            console.log('OK ' + info);
            res.send(ok(info.response))
        }
    });
}


function ok(msg) {
    let response;

    response = {
        error: false,
        code: 200,
        message: msg
    }

    return response
} 

function error(msg) {
    let response;

    response = {
        error: true,
        code: 400,
        message: msg
    }

    return response
}

module.exports = {sendMail}