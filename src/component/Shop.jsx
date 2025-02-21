import React, {  useState } from 'react'
import spo from '../assets/sp.png'
import dos from '../assets/dosh.png'
import idil from '../assets/idi.png'
import kay from '../assets/kayl.png'
import kayl from '../assets/kay.png'
import mu from '../assets/mut.png'
import ar from '../assets/ari.png'
import ka from '../assets/kat.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'



function Shop() {

  const product = [

    {id:1, value: "iam product", price: "21.60", image: spo ,  },
    {id:2, value: "iam product", price: "14.99", image: dos, },
    {id:3, value: "iam product", price: "19.99", image: idil, },
    {id:4, value: "iam product", price: "19.99", image: kay , },
    
    {id:5, value: "iam product", price: "21.60", image: kayl , },
    {id:6, value: "iam product", price: "21.60", image: mu ,},
    {id:7, value: "iam product", price: "21.60", image: ar , },
    {id:8, value: "iam product", price: "21.60", image: ka , },




  ]


 


  const [count, setcount] = useState(1)

  const increment = (id) => {
    setcount(count+1)
  };

 
  function decrement(id){
    console.log(id);
    
    if (count !=0) {

setcount(count-1)
    
    }
  }


  
  

  return (
    <>


      <div className='md:px-72 mt-14'>



        <div className='bg-white w-full  h-fit py-4 '>
          <h1 className='text-3xl font-bold text-gray-700 text-center py-5 '>Shop</h1>


          <div className='grid grid-cols-2 md:grid-cols-4 px-5 pt-10 gap-3 h-fit'>

            {product.map((item) => (
              <div className='w-full shadow   '>
                <img src={item.image} alt="no image" className='h-52  bg-gray-200 w-full' />
               
                  <p className='text-center font-light mt-2'>{item.value}</p>
                  <p className='font-light text-center'>{item.price}</p>
               

                <div className='mt-3 w-full h-10 bg-white outline flex justify-between p-2'>

                  <div >
                    <button onClick={(id)=>decrement(item.id)}> <FontAwesomeIcon icon={faMinus} style={{ color: "#0d0d0d", }} /> </button>
                  </div>

                  <div>
                    <h1  >{count}</h1>
                  </div>

                  <div>
                    <button onClick={(id)=>increment(item.id)} > <FontAwesomeIcon icon={faPlus} style={{ color: "#0d0d0d", }} /> </button>
                  </div>



                </div>

                <button className='w-full h-10 bg-blue-300 hover:bg-gray-200 mt-3'> Add to Cart</button>
              </div>
            ))
}


          </div>



        </div>



      </div>








    </>
  )
}

export default Shop