import React, { useState, useEffect } from 'react'
import axios from 'axios'




const Result = ({ finalInput }) => {

  const [cocktails, setCocktails] = useState([])

  // const [isError, setIsError] = ({ error: false, message: '' })

  const resultArr = finalInput[0].split('')



  const getCocktails = async () => {

    try {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      console.log(data)
    } catch (error) {
      // setIsError({ error: true, message: error.message })
      console.log(error)
    }
  }

  getCocktails()







  return (

    <>
      <h2>Your result</h2>
      <section className='result-wrapper'>
        {resultArr.map((letter, index) => {
          <div className="card-wrapper">
            <div className="card-img"></div>
            <div className="card-txt"></div>
          </div>

        })
        }
      </section>
    </>
  )
}


export default Result