import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import EditProduct from './pages/EditProduct'
import AddProduct from './pages/AddProduct'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Contact from './pages/Contact'
import Forgot from './pages/Forgot'
import Reset from './pages/Reset'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/product_details" element={<Product/>}/>
          <Route path="/edit_product" element={<EditProduct/>}/>
          <Route path="/add_product" element={<AddProduct/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/edit_profile" element={<EditProfile/>}/>
          <Route path="/contactus" element={<Contact/>}/>
          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/resetpassword" element={<Reset/>}/>
        </Routes>
      </BrowserRouter>
       
  )
}

export default App
