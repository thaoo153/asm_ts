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

  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/detail/:id' element={<DetailPage products={products} />} />
          <Route path='/add' element={<AddProduct addProduct={addProduct} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
