
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/Nav'
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import Shop from './component/Shop'
import Aboutus from './component/Aboutus'
import Faq from './component/Faq'
import Contact from './component/Contact'


function App() {
  

  return (
    <div className='bg-blue-300 md:pt-16 '>
   
    {/* <div className='bg-blue-300 w-screen  '> */}
    
         <Nav/>
         <Header/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contact' element={<Contact/>}/>
        
    
         </Routes>
         <Footer/>
         
    {/* </div> */}
  
    </div>
  )
}

export default App
