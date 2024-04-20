import React from 'react'
import { useCustomFoodHook } from './context/Foodcontext'
import Loading from './Loading';


function Home() {

    const {foodData} = useCustomFoodHook()
    console.log(foodData);

  return (
    <>
       {
        foodData ? (
            <div className='w-full h-screen '>
            { foodData.map((val,i) =>(
            <div className=' w-full h-full'>
            {/* {value} */}
                <img className='w-full h-full' src={val.strMealThumb} alt="Food image" />
            </div>
        )) }
        </div>
        ): <Loading />
       }
   
    </>
  )
}

export default Home