import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import Date from '../../components/Date';
import Layout from '../../components/Layout';
import CodeBlock from '../../components/CodeBlock';

import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  } catch (e) {
    return {
      props: {
        error: '해당 게시글을 찾을 수 없습니다.',
      },
    };
  }
}

function Button({ children }) {
  return <button type="button" onClick={() => alert('Thank for click')}>{children}</button>;
}

const components = {
  Button, CodeBlock,
};

export default function Post({ postData, error }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
        {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components} /> }
      </article>
    </Layout>
  );
}
