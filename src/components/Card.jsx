import React from 'react'
import { useParams } from 'react-router-dom';

function Card() {
  const {idCategory} = useParams()
    console.log("id log",idCategory);
  return (
    <div className='text-white'>Card</div>
  )
}

export default Card