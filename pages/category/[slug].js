import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import {getCategories, getCategoryPosts, getPostDetails} from '../../services';
import {PostDetail, Categories, PostWidget, Author, Comments, PostCard, CommentsForm, Loader} from '../../components';
import { TypeInfo } from 'graphql';
const CategoryPosts = ({ posts: any }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mb-8 px-10 mx-auto">
      <Head>
        <title>Nogometna taktika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = "grid grid-cols-1 lg:grid-cols-12 grid-rows-1 gap-12 container">
          <div className="grid grid-cols-1 lg:grid-cols-3 object-contain items-stretch col-span-8 gap-4">
            {posts.map((post, index)=><PostCard  post = {post.node} key = {post?.title}></PostCard>)}
          </div>
          <div className="lg:col-span-4 lg:row-span-3 col-span-8">
            <div className="lg:sticky relative top-8">
              <Categories/>
              <PostWidget/>
           </div>
      </div>
      </div>
      
    </div>
  )
}

export default CategoryPosts;

export async function getStaticProps({ params }){
    const posts = (await getCategoryPosts(params.slug)) || [];
    return{
      props:{ posts },
      revalidate: 10,
      
    };
  }

export async function getStaticPaths(){
    const categories = await getCategories();
    return {
        paths: categories.map(({ slug }) => ({params: {slug}})),
        fallback: true,
        revalidate: 10,

    }
}