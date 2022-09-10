export default function handler(req, res) {
  if (req.query.token !== 'jimmy' || !req.query.post) {
    return res.status(401).json({ message: 'invalid token' });
  }

  res.setPreviewData({});
  return res.redirect(`/posts/${req.query.post}`);
}
