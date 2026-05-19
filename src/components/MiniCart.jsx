import {Link, useNavigate} from "react-router-dom"
import useCartStore from "../store/cartStore"

function MiniCart() {
  const cart = useCartStore(state => state.cart)
  const navigate = useNavigate()

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="absolute right-4 top-20 w-96 bg-white shadow-2xl rounded-3xl p-5 z-50">

      <h3 className="text-2xl font-bold mb-5">
        Your Cart
      </h3>

      <div className="space-y-4 max-h-96 overflow-y-auto">

        {cart.map(item => (
          <div
            key={item.id}
            className="flex gap-4"
          >
            <img
              src={item.image}
              className="w-16 h-16 object-contain bg-gray-100 rounded-xl p-2"
            />

            <div>
              <p className="font-medium line-clamp-1">
                {item.title}
              </p>

              <p className="text-sm text-gray-500">
                Qty: {item.quantity}
              </p>

              <p className="font-bold text-blue-700">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t mt-5 pt-5">
        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <Link to="/cart">
            <button className="border w-full py-3 rounded-xl">
              View Cart
            </button>
          </Link>

          <button
            disabled={!cart.length}
            onClick={() => navigate("/checkout")}
            className={`py-3 rounded-xl transition text-white

            ${
              cart.length
                ? "bg-[#1f1f1f] hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default MiniCart