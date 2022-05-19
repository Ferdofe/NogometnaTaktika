import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((newCategories)=>setCategories(newCategories))
  }, [])
  
  return (

    <div className="shadow-lg rounded-lg p-8 mb-2 pb-12 bg-custom-fg border-gradient-alt mr-12 lg:mr-0">
      <h3 className="text-l text-custom-text mb-8 font-semibold border-b pb-4">
        Categories  
      </h3> 
      {categories.map((category)=>(
      <Link key={category.slug} href={`/category/${category.slug}`}>
        <span className="cursor-pointer text-xs block text-custom-text pb-3 mb-3 ">
          {category.name}
        </span>
      </Link>
      ))} 
    </div>
  )
}

export default Categories