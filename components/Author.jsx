import React from 'react'
import Image from 'next/image'
const Author = ({ author }) => {
  console.log(author.photo.url)
  return (
    <div className="text-center shadow-[0_50px_60px_-15px_rgba(0,0,0,0.3)] mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20 bg-purple-500">
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg ">{author.description}</p>
    </div>
  )
}

export default Author