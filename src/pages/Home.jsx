import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"
import ProductModal from "../components/ProductModal"

import {useEffect, useState} from "react"
import {getProducts} from "../services/api"

function Home() {
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(null)

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data.slice(0, 8))
    } catch (error) {
      console.log(error)
    }
  }

  fetchProducts()
}, [])

  return (
    <>
      <Header />

      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold mb-8">
          Featured Products
        </h2>

        <ProductGrid
          products={products}
          onQuickView={setSelected}
        />
      </section>

      <Footer />

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}

export default Home