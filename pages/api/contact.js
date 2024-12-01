// pages/api/contact.js
import connectToDatabase from '../../lib/mongoose';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: '모든 필드를 입력해주세요.' });
      }

      const newContact = await Contact.create({
        name,
        email,
        message,
      });

      return res.status(201).json({ success: true, data: newContact });
    } catch (error) {
      return res.status(500).json({ success: false, message: '서버 에러입니다.', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
