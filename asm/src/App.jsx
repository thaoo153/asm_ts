import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import AddProduct from './pages/Admin/AddProduct'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const addNewProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/detail/:id' element={<DetailPage products={products} />} />
          <Route path='/add' element={<AddProduct addProduct={addNewProduct} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
