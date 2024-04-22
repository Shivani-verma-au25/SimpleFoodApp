import React from 'react'
import { useCustomFoodHook } from './context/Foodcontext'
import Loading from './Loading';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Category from './Category';


function Home() {
    const {foodData} = useCustomFoodHook()
    

  return (
        <>
          <div className='w-full h-screen'>
            <div><Navbar /></div>
              {foodData.length > 0 ? foodData.map((val,i) =>(
                <div key={i} className='w-full h-[40vw] flex justify-center items-center relative '>
                  <Link to={'/homepic'} className='w-full h-full'><img className='w-full h-full object-cover blur-sm' src={val.strMealThumb} alt="Food image" /></Link>
                    <h1 className='absolute text-5xl text-[#86003C] shadow-lg '>Find Your taste</h1>
                </div>
              )) : <Loading /> }

              {/* category */}
              <div className=''>
                <h1 className='bg-black p-4 uppercase text-white text-3xl flex  justify-start items-center flex-col'>Categories</h1>
              <div className='w-full p-10 bg-black flex  justify-start items-center gap-10 overflow-x-scroll overflow-y-hidden snap-proximity scroll-smooth snap-x'>
                <Category />
              </div>
              </div>
              
          </div>   
        </>
  )
}

export default Home