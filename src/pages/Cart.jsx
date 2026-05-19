import {useNavigate} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

import useCartStore from "../store/cartStore"

function Cart() {
  const navigate = useNavigate()
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCartStore()

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const shipping = cart.length
    ? subtotal > 100
      ? 0
      : 20
    : 0

  const tax = cart.length ? subtotal * 0.08 : 0

  const total = subtotal + shipping + tax

  return (
    <>
      <Header />

      <section className="max-w-7xl mx-auto px-4 py-10">

        <h1 className="text-5xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10">

          <div className="space-y-5">

            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 flex gap-5"
              >
                <img
                  src={item.image}
                  className="w-32 h-32 object-contain bg-gray-100 rounded-2xl p-4"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-blue-700 font-bold mt-2">
                    ${item.price}
                  </p>

                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="border px-4 py-2 rounded-xl"
                    >
                      -
                    </button>

                    <span className="px-3 py-2">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="border px-4 py-2 rounded-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 h-fit sticky top-24">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              disabled={!cart.length}
              onClick={() => navigate("/checkout")}
              className={`w-full py-5 rounded-full transition

              ${
                cart.length
                  ? "bg-[#1f1f1f] text-white"
                  : "bg-[#d8d3cc] text-[#6b6b6b] cursor-not-allowed"
              }
            `}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Cart