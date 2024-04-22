import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import CATEGORY_URI from '../constant/constant.jsx'

export const foodContext = createContext({})
const URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

// custom hook 
export const useCustomFoodHook = ()=>{
    return useContext(foodContext)
}

function Foodcontext(props) {
    const [foodData,setFoodData] = useState([])
    const [category,setCategory] = useState([])

    // getting data from APi using axios 
    const getOneFood = async () =>{
        try {
            const blob = await axios.get(URL)
            const res = blob.data.meals
            // console.log(res)
            if (res != "" ) {
                setFoodData(res)
            }
            
        } catch (error) {
            console.log("Some thing went wrong at context: ",error);
            throw error
        }
    }  
    // useEfffect hook
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            getOneFood()
        },1000)
        return () => clearTimeout(timeOut)
    })
    // console.log("fooddtt",foodData);


    // categories function

    const geCategory = async() =>{
        try {
            const rawData = await axios.get(CATEGORY_URI)
            const data = rawData.data.categories
            setCategory(data)
        } catch (error) {
            console.log("cateoires error" ,error);
        }
    }

   useEffect(()=>{
    geCategory()
   },[])
  return (
    <foodContext.Provider value={{foodData,category}}>{props.children}</foodContext.Provider>
  )
}

export default Foodcontext