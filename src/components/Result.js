import React, { useState, useEffect } from 'react'
import axios from 'axios'




const Result = ({ finalInput }) => {

  const [cocktails, setCocktails] = useState([])

  // const [isError, setIsError] = ({ error: false, message: '' })

  const resultArr = finalInput[0].split('')

  const generateRandomNum = (num) => {
    return Math.floor(Math.random() * num)

  }


  const getCocktails = async (letter, index) => {

    try {
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter.toLowerCase()}`)
      console.log(data)
      console.log(data.drinks)
      const randomNum = generateRandomNum(data.drinks.length)
      return { name: data.drinks[randomNum].strDrink, image: data.drinks[randomNum].strDrinkThumb }

    } catch (error) {
      // setIsError({ error: true, message: error.message })
      console.log(error)
    }
  }


  useEffect(() => {

    const mappedResultPromises = resultArr.map(item => {
      return getCocktails(item)
    })
    Promise.all(mappedResultPromises).then(mappedResultArr => {
      console.log('chec mapped result', mappedResultArr)
      setCocktails(mappedResultArr)
    })
  }, [])



  return (

    <>
      <h2>Your result</h2>
      <section className='result-wrapper'>
        {cocktails.filter(Boolean).map((letter, i) => {
          return (
            <div key={i} className="card-wrapper">
              <div className="card-img"><img src={letter.image} /></div>
              <div className="card-txt">{letter.name}</div>
            </div>
          )

        })
        }
      </section>
    </>
  )
}


export default Result