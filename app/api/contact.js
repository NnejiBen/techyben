// pages/api/contact.js
import { IncomingForm } from 'formidable';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const form = new IncomingForm();
      const data = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields) => {
          if (err) return reject(err);
          resolve(fields);
        });
      });

      // Use Formspree to forward the form data to your email.
      const response = await fetch('https://formspree.io/f/xwkdzbyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Form submission successful!' });
      } else {
        res.status(500).json({ error: 'Form submission failed.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
