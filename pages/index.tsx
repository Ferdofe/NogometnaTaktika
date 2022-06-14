import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {PostCard, Categories, PostWidget} from  '../components/';
import { getPosts } from '../services'; 
import { FeaturedPosts } from '../sections';


export default function Home({ posts }){
  return (
    <div className="container mb-8 px-10 mx-auto">
      <Head>
        <title>Nogometna taktika</title>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className = "grid grid-cols-1 lg:grid-cols-12 grid-rows-1 gap-12 container">
          <div className="grid grid-cols-1 lg:grid-cols-3 object-contain items-stretch col-span-8 gap-4 mr-6 lg:mr-0">
            {posts.map((post)=><PostCard  post = {post.node} key = {post?.title}></PostCard>)}
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

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  return{
    props:{ posts },
    revalidate: 10,
  }
}