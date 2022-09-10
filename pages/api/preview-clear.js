export default function handler(req, res) {
  res.clearPreviewData({});
  return res.status(200).json({ message: 'cookie clear' });
}
