import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import MainNav from './components/MainNav'
import Home from './components/Home'
import Result from './components/Result'






const App = () => {

  const finalInput = ['']


  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path='/' element={<Home finalInput={finalInput}/>}></Route>
          <Route path='/result' element={<Result finalInput={finalInput} />}></Route>

        </Routes>

      </BrowserRouter>
    </>



  )
}


export default App