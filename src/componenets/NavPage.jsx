import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Shares from '../pages/Shares'
import Users from '../pages/Users'

const NavPage = () => {
  return (
    <>
        <section>
           <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/users' element={ <Users/> }/>
                <Route path='/shares' element={ <Shares/> }/>
           </Routes>
        </section>
    </>
  )
}

export default NavPage