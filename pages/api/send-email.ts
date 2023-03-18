import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

/**
 * Types
 */
type FieldsProps = {
  name: string;
  email: string;
  message: string;
};

/**
 * Handler
 */
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
    res.status(500).json({ error: 'Failed to send mail' });
  }
};

export default handler;
