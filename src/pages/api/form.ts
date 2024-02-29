
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { stars, name, description } = req.body;

    console.log('Received star submission:', { stars, name, description });

    res.status(200).json({ message: 'Star submission received successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}