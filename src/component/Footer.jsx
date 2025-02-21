import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>



    
<div className='grid md:grid-cols-2 grid-cols-2 mt-16 p-5 md:px-72 '>

<div>
  <div className='md:flex flex gap-3 mt-2 '>
  
  <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} className='text-2xl hover:transform hover:scale-125 duration:500' />
  <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} className='text-2xl hover:transform hover:scale-125 duration:500' />
  <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} className='text-2xl hover:transform hover:scale-125 duration:500' />
  
  </div>

  <div className=' mt-5'>
    <p>© 2035 by CHEFFY. Powered and secured by Wix</p>
</div>
</div>

<div className='ms-5 '>

<h1 className='text-xl font-light'>Join our mailing list</h1>

<div className='mt-2'>
<input type="text" placeholder='Enter your email here` ' className='outline w-full bg-gray-200 h-8' />
<button className='bg-gray-100 w-full h-8 mt-2 text-xl font-light'>Subscribe Now</button>
</div>

</div>




</div>
    
    
    
    
    
    
    </>
  )
}

export default Footer