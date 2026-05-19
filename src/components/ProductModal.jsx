import useCartStore from "../store/cartStore"
import toast from "react-hot-toast"

function ProductModal({product, onClose}) {
  const addToCart = useCartStore(state => state.addToCart)

  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl max-w-4xl w-full grid md:grid-cols-2 gap-10 p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl"
        >
          ×
        </button>

        <img
          src={product.image}
          className="w-full h-96 object-contain"
        />

        <div>
          <p className="text-sm text-blue-700 font-medium capitalize">
            {product.category}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {product.title}
          </h2>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-4xl font-bold text-blue-700">
              ${product.price}
            </p>

            <button
              onClick={() => {
                addToCart(product)
                toast.success("Added to cart")
              }}
              className="bg-blue-700 text-white px-8 py-4 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal