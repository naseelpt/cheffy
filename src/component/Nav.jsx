import { faUser, } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import chef from '../assets/che.png'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'



function Nav() {
  return (
    
        <>

        
        <div className='flex w-full h-12 items-center overflow-x-hidden justify-between px-2 md:px-72 '>

         <div className='flex  gap-2' >
         <FontAwesomeIcon icon={faUser} style={{color: "#121212",}} className=''  />
         <h1 className='whitespace-nowrap'>Log in</h1>
         </div>

        

          <img src={chef} alt="no image" className='w-24 h-24' />

        


         <div className='flex gap-2 items-center'>
          <h1 className=' text-xl'>free shoping</h1>
          <FontAwesomeIcon icon={faBagShopping} style={{color: "#080808",}} className='  ' />

         </div>
      

        </div>

        
        
        
        </>
   
  )
}

export default Nav