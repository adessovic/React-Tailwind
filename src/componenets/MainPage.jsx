import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'
import Sidebar from './Sidebar'

function MainPage() {
  return (
    <>
        {/* Heading section */}
        <section>
            <div>
                <Navbar />    
            </div>
        </section>
        
        {/* Sidebar section */}
        <section>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 bg-black h-screen pl-2 md:col-span-2'>
                    <Sidebar />
                </div>
                <div className='col-span-9 bg-blue-900 h-screen pl-2 md:col-span-10'>
                    <NavPage/>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default MainPage