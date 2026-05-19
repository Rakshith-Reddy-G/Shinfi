import {useEffect, useMemo, useState} from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductGrid from "../components/ProductGrid"
import ProductModal from "../components/ProductModal"

import {getProducts} from "../services/api"

function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("")
  const [selected, setSelected] = useState(null)

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  fetchProducts()
}, [])

  const categories = [
    "all",
    ...new Set(products.map(p => p.category)),
  ]

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (search) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category !== "all") {
      filtered = filtered.filter(
        product => product.category === category
      )
    }

    switch (sort) {
      case "low":
        filtered.sort((a, b) => a.price - b.price)
        break

      case "high":
        filtered.sort((a, b) => b.price - a.price)
        break

      case "az":
        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
        break

      case "za":
        filtered.sort((a, b) =>
          b.title.localeCompare(a.title)
        )
        break

      default:
        break
    }

    return filtered
  }, [products, search, category, sort])

  return (
    <>
      <Header />

      <section className="max-w-7xl mx-auto px-4 py-10">

        <h1 className="text-5xl font-bold">
          Explore Collections
        </h1>

        <p className="text-gray-500 mt-3">
          Curated essentials for modern lifestyle.
        </p>

        <div className="grid lg:grid-cols-[250px_1fr] gap-10 mt-10">

          <aside className="space-y-8">

            <div>
              <h3 className="font-bold text-2xl mb-4">
                Categories
              </h3>

              <div className="space-y-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`block capitalize ${
                      category === cat
                        ? "text-blue-700 font-bold"
                        : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full border p-4 rounded-xl"
              />
            </div>

            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="w-full border p-4 rounded-xl"
            >
              <option value="">Sort By</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
              <option value="az">Title A → Z</option>
              <option value="za">Title Z → A</option>
            </select>
          </aside>

          <ProductGrid
            products={filteredProducts}
            onQuickView={setSelected}
          />
        </div>
      </section>

      <Footer />

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}

export default Products