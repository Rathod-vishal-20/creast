import {NavLink} from 'react-router-dom'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import Footer from './pages/Footer'
import Login from './pages/Login'
import Profile from './pages/Profile'
function App() {

  return (
    <>
     <div className=''>
      
      <nav className='h-16 sticky bg-gray-300 flex justify-evenly'>

      <div className='text-orange-900 py-2 font-bold text-3xl'>Cleverbook</div>
    <ul className='flex justify-evenly items-center gap-4 px-4 py-4 text-2xl '>
    <li className='hover:text-blue-900 '>
      <NavLink to="/">Home</NavLink>
    </li>
    <li className='group hover:text-blue-900 '> 
      <NavLink >
        <Profile/>
      </NavLink>
      
      
    </li>
    <li className='hover:text-blue-900 '> 
    <NavLink to="/about">About</NavLink>
       </li>

    <li className='hover:text-blue-900 '>
      <NavLink to="/login">Login</NavLink>
    </li>

    </ul>

      </nav>




    <Routes>
      <Route path="/" element={<Homepage/>}/>
      {/* <Route path='/product' element={<ProductPage/>}/> */}
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
     </div>
    </>
  )
}

export default App
