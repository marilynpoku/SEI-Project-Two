import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Home = ( { finalInput } ) => {


  const [inputs, setInputs] = useState('')
  const [error, setError] = useState( { error: false, message: '' } )


  const navigate = useNavigate()

  const handleChange = (e) => {
    setError({ error: false, message: '' })
    setInputs(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    finalInput[0] = inputs
    isNaN(inputs) ? navigate('/result') : setError({ error: true, message: 'Letters only' })
    return
  }


  

  return (
    <>
      <section className='page-wrapper'>
        <header>
          <h1>Cocktails</h1>
          <p>hello.........</p>
        </header>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} placeholder='Enter your name' defaultValue={inputs} />
          { error.error && <p>{error.message}</p>} 
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </section>
    </>
  )
}


export default Home