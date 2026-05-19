import {FiTrash2} from "react-icons/fi"
import useCartStore from "../store/cartStore"

function CartItem({item}) {
  const {
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCartStore()

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col sm:flex-row gap-5 border border-gray-100">

      <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-28 h-28 object-contain"
        />
      </div>

      <div className="flex-1">
        <p className="text-sm text-violet-600 font-medium capitalize">
          {item.category}
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-1 line-clamp-2">
          {item.title}
        </h2>

        <p className="text-2xl font-bold text-gray-900 mt-3">
          ${item.price}
        </p>

        <div className="flex items-center gap-3 mt-5">

          <button
            onClick={() => decreaseQty(item.id)}
            className="w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
          >
            -
          </button>

          <span className="font-semibold text-lg">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-10 h-10 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col items-center justify-between">
        <p className="text-xl font-bold text-violet-600">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  )
}

export default CartItem