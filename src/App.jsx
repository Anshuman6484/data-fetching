import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import Items from './components/Items'

export default function App() {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [error, setError] = useState(null)
  const [query, setQuery] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://api.sampleapis.com/beers/ale')
        setProducts(res.data)
        setAllProducts(res.data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!query) {
      setProducts(allProducts)
    } else {
      const newProducts = allProducts.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      setProducts(newProducts)
    }
  }, [query, allProducts])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header />
      <SearchBox query={query} setQuery={setQuery} />
      <Items products={products} isLoading={isLoading} />
    </div>
  )
}
