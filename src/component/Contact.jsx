import React from 'react'

function Contact() {
    return (
        <>




            <div className='md:px-72 pt-16'>

                <div className='bg-white w-full md:h-[500px] h-[600px]'>

                    <div>
                        <h1 className='text-3xl font-medium text-center pt-28 '>CONTACT US</h1>

                        <p className='text-2xl font-light text-center mt-8'>Email ptnaseel@gmail.com</p>

                        <p className='text-xl font-light text-center mt-2'>Phone 123-456-789</p>

                    </div>



                    <div className='grid md:grid-cols-2 md:px-56 pt-5 ps-14 '>

                        <div>
                            <div>
                                <input type="text" placeholder='Name' className='w-60 h-8 outline' />
                            </div>

                            <div className='mt-2'>
                                <input type="text" placeholder='Email' className='w-60 h-8 outline ' />
                            </div>

                            <div className='mt-2'>
                                <input type="text" placeholder='Phone' className='w-60 h-8 outline ' />
                            </div>
                        </div>


                        <div className='outline w-60 md:h-[110px] h-28   '>
                            <input type="text" placeholder='Type your message here' className='outline-hidden ms-5 pt-2 font-light' />
                            <button className='w-28 h-8 ms-32 mt-25 bg-blue-300'>Submit</button>
                        </div>











                    </div>



                </div>

            </div>









        </>
    )
}

export default Contact



