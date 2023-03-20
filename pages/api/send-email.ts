import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import type { Mail } from '@/types/mail';

/**
 * Handler
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body as Mail;

  // Return an error if POST method is not used
  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'Only POST method is allowed.',
    });
    return;
  }

  // Return an error if the request body does not contain a valid name object
  if (!name || !name.trim()) {
    res.status(400).json({
      error: 'Request body does not contain a valid name object.',
    });
    return;
  }

  // Return an error if the request body does not contain a valid email object
  if (!email || !email.trim()) {
    res.status(400).json({
      error: 'Request body does not contain a valid email object.',
    });
    return;
  }

  // Return an error if the request body does not contain a valid message object
  if (!message || !message.trim()) {
    res.status(400).json({
      error: 'Request body does not contain a valid message object.',
    });
    return;
  }

  try {
    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Send mail with defined transport object
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
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Failed to send email.' });
  }
};

export default handler;
