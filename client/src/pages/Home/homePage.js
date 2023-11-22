import React from 'react'
import Header from '../../layout/Header/header'
import FooterLayout from '../../layout/Footer/footer'

const HomePage = () => {
  return (
    <>
      <Header/>
        <div className='font-bold text-primaryGreen-500'>Home</div>
      <FooterLayout/>
    </>
  )
}

export default HomePage