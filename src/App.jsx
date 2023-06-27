import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import EditProduct from './pages/EditProduct'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/product_details" element={<Product/>}/>
          <Route path="/edit_product" element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
       
  )
}

export default App
