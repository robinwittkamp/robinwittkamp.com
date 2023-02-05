import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handlerOne = async (req: NextApiRequest, res: NextApiResponse) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${req.body.name}" <${req.body.email}>`,
    to: 'info@robinwittkamp.com',
    subject: 'Contact form at robinwittkamp.com',
    text: req.body.message,
    html: req.body.message,
  });

  console.log('Message sent: %s', info.response);
  console.log('Request Body:', req.body);

  res.status(200).json({ status: 'OK' });
};

// const handlerTwo = async (req, res) => {
//   require('dotenv').config();

//   const nodemailer = require('nodemailer');

//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: 'smtp.gmail.com',
//     auth: {
//       user: process.env.email,
//       pass: process.env.password,
//     },
//     secure: true,
//   });

//   const mailData = {
//     from: 'usmanasifdev@gmail.com',
//     to: 'jusmanasif435@gmail.com',
//     subject: `Message From Usman Asif Dev`,
//     //   text: req.body.message + " | Sent from: " + req.body.email,
//     html: `
//     <div><strong>Name:</strong> ${req.body.fullName}</div>
//     <br/>
//     <div><strong>Email:</strong> ${req.body.email}</div>
//     <br/>
//     <div><strong>Phone:</strong> ${req.body.phone}</div>
//     <br/>
//     <div><strong>Message:</strong> ${req.body.message}</div>
//     <br/>
//     <p>Sent from:
//       ${req.body.email}</p>`,
//   };

//   await new Promise((resolve, reject) => {
//     transporter.sendMail(mailData, function (err, info) {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         console.log(info);
//         resolve(info);
//       }
//     });
//   });
//   res.status(200).json({ status: 'OK' });
// };

export default handlerOne;
