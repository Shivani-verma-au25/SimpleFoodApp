import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const foodContext = createContext({})
const URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const useCustomFoodHook = ()=>{
    return useContext(foodContext)
}

function Foodcontext(props) {
    const [foodData,setFoodData] = useState([])
    const [time,SetTime] = useState(1000)

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

    // getOneFood()
    // console.log("foodata",foodData);
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            getOneFood()
        },4000)
        return () => clearTimeout(timeOut)
    })
    // console.log("fooddtt",foodData);


  return (
    <foodContext.Provider value={{foodData}}>{props.children}</foodContext.Provider>
  )
}

export default Foodcontext