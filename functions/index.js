const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require("dotenv").config();

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendEmailNotification = functions.firestore
  .document("emails/{docId}")
  .onCreate((snap, ctx) => {
    const data = snap.data();
    console.log(data);
    const authData = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });

    authData
      .sendMail({
        from: "info.truly@portfolioapp.com",
        to: `${SENDER_EMAIL}`,
        subject: `${data.subject}`,
        text: `${data.email}`,
        html: `<h1>Hello ${data.name} <h1>
                <p>${data.message}<p>`,
      })
      .then((res) => console.log("successfully sent that mail"))
      .catch((err) => console.log(err));
  });
