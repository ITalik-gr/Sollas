"use strict";
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "4040c59cc57043732cad540939fa3c36"
  }
});

async function main() {
  const info = await transporter.sendMail({
    from: 'WebSite <mailtrap@sollas.co>', // sender address
    to: 'vitalik.gricenko77@gmail.com', // list of receivers
    subject: "Hello ", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

let btn = document.querySelector('.idea-btn');
console.log(btn)
btn.addEventListener('click', () => {
  console.log('sending...')

})
