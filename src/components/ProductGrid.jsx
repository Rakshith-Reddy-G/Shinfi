import ProductCard from "./ProductCard"

function ProductGrid({products, onQuickView}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  )
}

export default ProductGrid