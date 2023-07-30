import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
