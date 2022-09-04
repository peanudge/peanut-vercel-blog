import { getSortedPostsData } from '../../lib/posts';

export default function handler(req, res) {
  const allPostsData = getSortedPostsData();
  return res.status(200).send({ allPostsData });
}
