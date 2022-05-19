import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';

function PostWidget({categories, slug}) {
  const [relatedPosts,setRelatedPosts] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug)
      .then((result)=>setRelatedPosts(result))
    }
    else{
      getRecentPosts()
      .then((result)=>setRelatedPosts(result))
    }
  }, [slug])
  
  return (
    <div className="shadow-lg rounded-lg p-8 mb-8 bg-custom-fg border-gradient-alt mr-12 lg:mr-0 text-sm">
      <h3 className="text-l mb-8 text-custom-text font-semibold border-b pb-4">
        {slug? "Related Posts" : "Recent Posts"}  
      </h3>  
      {relatedPosts.map((post)=>(
        <div key={post.title} className="flex items-center text-custom-text mb-4 w-full">
          <div className="w-16 flex-none">
             <img 
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
              src={post.featuredImage.url}
             />
          </div>
          <div className='flex-grow ml-4 '>
            <p className="text-custom-text font-xs">{moment(post.createdAt).format('DD.MM.YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md text-custom-text">{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget