import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'

function Header() {

  const nav = useNavigate()


  return (
    <>

      <h1 className='text-3xl font-medium text-center mt-10'>CHEFFY</h1>
      <h1 className='text-2xl text-center mt-5'>Your Kitchen Helper</h1>
      <div className='md:px-72 mt-5'>

        <div className='  h-10 outline-white rounded outline grid md:grid-cols-5 grid-cols-5   '>

          <Link to={"/"}>
            <div className='text-xl flex justify-center items-center  h-full hover:transform hover:scale-115 duration:500 hover:bg-gray-200  ' >
              <h1 >Home</h1>
            </div>
          </Link>


         <Link to={"/shop"}>
            <div className='text-xl flex justify-center items-center h-full hover:transform hover:scale-115 duration:500 hover:bg-gray-200    '>
              <h1>Shop</h1>
            </div>
  
         </Link>


          <Link to={"/about"}>
            <div className='text-xl flex justify-center items-center  h-full hover:transform hover:scale-115 duration:500 hover:bg-gray-200  '>
              <h1 >About</h1>
            </div>
          </Link>


        <Link to={"/faq"}>
            <div className='text-xl flex justify-center items-center  h-full hover:transform hover:scale-115 duration:500 hover:bg-gray-200  '>
              <h1>FAQ</h1>
            </div>
        </Link>


         <Link to={"/contact"}>
            <div className='text-xl flex justify-center items-center h-full hover:transform hover:scale-115 duration:500 hover:bg-gray-200   '>
              <h1>Contact</h1>
            </div>
         </Link>



        </div>
      </div>





    </>
  )
}

export default Header