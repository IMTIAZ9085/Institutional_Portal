const nodemailer = require("nodemailer");


const sendMail = async (options) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'geraldine15@ethereal.email',
            pass: '8FAzhGT6qYAKyE6d4G'
        }
    });


    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <ipverify@gmail.com>', // sender address
        to: options.to,
        subject: "Verify User Identity Request", // Subject line
        text: options.text, // plain text body
        html: "<b>Please Verify and be a part of this community</b>", // html body 
    });

    console.log("Email send successfully : %s", info.messageId);

}


module.exports = sendMail;


// const sendEmail = (options) => {
//       const transporter = nodemailer.createTransport({
//             service: process.env.EMAIL_SERVICE,
//             auth: {
//                   user: process.env.EMAIL_USERNAME,
//                   pass: process.env.EMAIL_PASSWORD
//             }
//       })

//       const mailOptions = {
//             from: process.env.EMAIL_FROM,
//             to: options.to,
//             subject: options.subject,
//             html: options.text
//       }

//       transporter.sendMail(mailOptions, function (err, info) {

//             if (err) {
//                   console.log(err);
//             } else {
//                   console.log("successfully send mail");
//                   console.log(info);
//             }
//       })
// }

// module.exports = sendEmail;