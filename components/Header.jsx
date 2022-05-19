  import React, {useState, useEffect, useContext} from 'react';
  import Link from 'next/link';
  import { getCategories } from '../services';
  import Image from 'next/image';
  

  function Header() {
      const [categories, setCategories] = useState([]);
      useEffect(() => {
        getCategories()
          .then((newCategories)=>setCategories(newCategories))
      }, [])
      
    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 pt-8">
            <div className="md:float-left flex items-flex-start items-center">
                <Link href="/" className="cursor-pointer">
                  <Image src="/../public/BWlogo.png" width="120px" height="120px" className='pb-16'/>
                </Link>
                <Link href='/'>
                  <h1 className="pl-8 text-custom-border text-2xl">NOGOMETNA TAKTIKA</h1>
                </Link>
            </div>
            <div className="hidden items-center md:float-left md:contents">
                    <Link href={`/category/analize`}>
                         <span className = "md:float-right mt-8 align-middle text-white ml-16 font-semibold p-4 cursor-pointer">
                            Analize
                         </span>
                    </Link>
                    <Link href={`/category/zanimljivosti`}>
                         <span className = "md:float-right mt-8 align-middle text-white ml-16 font-semibold  p-4 cursor-pointer">
                            Zanimljivosti
                         </span>
                    </Link>
                    <Link href={`/category/onama`}>
                         <span className = "md:float-right mt-8 align-middle text-white ml-16 font-semibold  p-4 cursor-pointer">
                            O nama
                         </span>
                    </Link>
            </div>
        </div>
      </div>
    )
  }  
  
  export default Header