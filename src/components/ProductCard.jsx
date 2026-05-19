import useCartStore from "../store/cartStore"

function ProductCard({product, onQuickView}) {
  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useCartStore()

  const existing = cart.find(
    item => item.id === product.id
  )

  return (
    <div className="group">

      <div
        onClick={() => onQuickView(product)}
        className="bg-[#faf8f5] border border-[#e7e2db] rounded-[32px] overflow-hidden cursor-pointer"
      >
        <div className="overflow-hidden bg-[#f0ece6]">
          <img
            src={product.image}
            className="w-full h-[360px] object-contain p-10 group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="p-6">

          <div className="flex justify-between items-start gap-4">

            <div>
              <p className="text-sm text-[#6b6b6b] capitalize">
                {product.category}
              </p>

              <h3 className="text-xl font-medium mt-2 line-clamp-2">
                {product.title}
              </h3>
            </div>

            <p className="text-lg font-semibold whitespace-nowrap">
              ${product.price}
            </p>
          </div>

          <div className="mt-8">

            {!existing ? (
              <button
                onClick={e => {
                  e.stopPropagation()
                  addToCart(product)
                }}
                className="w-full bg-[#1f1f1f] text-white py-4 rounded-full hover:opacity-90 transition"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between border border-[#d8d3cc] rounded-full p-2">

                <button
                  onClick={e => {
                    e.stopPropagation()
                    decreaseQty(product.id)
                  }}
                  className="w-10 h-10 rounded-full hover:bg-[#ebe7e0]"
                >
                  -
                </button>

                <span className="font-medium">
                  {existing.quantity}
                </span>

                <button
                  onClick={e => {
                    e.stopPropagation()
                    increaseQty(product.id)
                  }}
                  className="w-10 h-10 rounded-full hover:bg-[#ebe7e0]"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard