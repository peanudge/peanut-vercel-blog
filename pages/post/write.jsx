import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Layout from '@/components/Layout';

export default function Write() {
  const [showLink, setShowLink] = useState(false);
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);
  const handleSubmit = (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id, title, content,
        }),
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('fetch error');
      }).then((data) => {
        setShowLink(true);
        alert(JSON.stringify(data));
      })
        .catch((err) => alert(`request error: ${err}`));
    }
  };
  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input type="text" name="title" placeholder="title" required ref={titleRef} />
        <br />
        <textarea type="text" name="content" placeholder="content" required ref={contentRef} />
        <br />
        <input type="submit" value="Create" />
      </form>
      {showLink && <Link href={`/posts/${idRef.current.value}`}><a>Created Post Link</a></Link>}
    </Layout>
  );
}
