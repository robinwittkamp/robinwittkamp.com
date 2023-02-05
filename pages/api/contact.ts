import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FieldsProps = {
  name: string;
  email: string;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body as FieldsProps;

  // Return an error if POST method is not used
  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'Only POST method allowed',
    });
    return;
  }

  try {
    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.');
    }

    if (!email || !email.trim()) {
      throw new Error('Please provide a valid email address.');
    }

    if (!message || !message.trim()) {
      throw new Error('Please provide a valid email message.');
    }

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
      from: `"${name}" <${email}>`,
      to: 'info@robinwittkamp.com',
      subject: 'Contact form at robinwittkamp.com',
      text: message,
      html: message,
    });

    console.log('Message sent: %s', info.response);
    console.log('Request Body:', req.body);

    res.status(200).json({ status: 'OK' });
    // res.status(200).send({ status: 'done', message: 'message has been sent' });
  } catch (error) {
    res.status(500).send({ status: 'fail', error: `${error}` });
  }
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

export default handler;
