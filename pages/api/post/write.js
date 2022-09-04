import { format } from 'date-fns';
import { createPost } from '../../../lib/posts';

export default async function handler(req, res) {
  const { id, title, content } = req.body;
  try {
    createPost({
      id, title, content, date: format(new Date(), 'yyyy-MM-dd'),
    });
    res.status(200).json({ message: 'create success' });
  } catch (err) {
    res.status(500).json({ message: `create failed ${err}` });
  }
}
