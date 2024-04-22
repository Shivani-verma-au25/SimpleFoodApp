import React from 'react'
import { useCustomFoodHook } from './context/Foodcontext'
import { Link, useParams } from 'react-router-dom'

function Category() {
    const {category} = useCustomFoodHook()
    // console.log(category);
    const {idCategory} = useParams()
    console.log("id log",idCategory);

  return (
    <>
        {category.length >0 ?category.map((cate,i) =>(
            <Link key={i} to={ `/:${cate.idCategory}`}>
                <div  className='w-[20vw] h-[20vw]  flex justify-center items-center flex-col snap-center snap-always'>
                    <div className='w-[15vw] h-[15vw] bg-[#E41F7B] hover:bg-[#86003C] ease-out-in duration-500 cursor-pointer rounded-full overflow-hidden border-2 border-white '>
                        <img className='w-full h-full object-center ' src={cate.strCategoryThumb} alt="" />
                    </div>
                    <h3 className='text-white py-2'>{cate.strCategory}</h3>
                </div>
            </Link>
        )) : <h1 className='text-white'>No data</h1> }
    </>
  )
}

export default Category