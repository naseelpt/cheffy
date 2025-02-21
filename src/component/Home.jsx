import React, { useState } from 'react'
import spo from '../assets/sp.png'
import kayl from '../assets/kay.png'
import dos from '../assets/dosh.png'
import ka from '../assets/kat.png'
import mu from '../assets/mut.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'

function Home() {

  const [select, setselect] = useState(0);

  const scroll = [
    { image: spo },
    { image: kayl },
    {image:dos},
    {image:ka},
    {image:mu},

    
  ]


  function plus() {
    setselect((item) => (item + 1) % scroll.length)
  }


  function minus() {
    setselect((item) => ((item - 1) + scroll.length)%scroll.length)
  }







  return (
    <>

      <div className='md:px-72'>




        <div className='grid md:grid-cols-1'>

          <div className='mt-16'>

            <div className='bg-white w-full h-[500px] flex items-center justify-center p-5'>


              <button onClick={()=>minus()} className='outline p-3 shadow-2xl hover:transform hover:scale-110 duration-500'><FontAwesomeIcon icon={faLessThan} style={{ color: "#0c0d0d", }} /></button>

              <img src={scroll[select].image} alt="no image" className='w-full h-[660px]  object-contain' />

              <button onClick={() => plus()} className='outline p-3 shadow-2xl  hover:transform hover:scale-110 duration-500'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#0d0d0d", }} /></button>


            </div>

          </div>
        </div>






      </div>




    </>
  )
}

export default Home