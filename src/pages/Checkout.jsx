import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useCartStore from "../store/cartStore"

function Checkout() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const clearCart = useCartStore(state => state.clearCart)

  return (
    <>
      <Header />

      <section className="max-w-6xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-semibold">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-14 mt-14">

          <div className="bg-[#faf8f5] border border-[#e7e2db] rounded-[32px] p-10">

            <h2 className="text-2xl font-semibold">
              Payment Details
            </h2>

            <div className="mt-10">

              <div className="grid grid-cols-3 gap-4">

                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`py-4 rounded-2xl border transition

                  ${
                    paymentMethod === "card"
                      ? "bg-[#1f1f1f] text-white border-[#1f1f1f]"
                      : "bg-white border-[#d8d3cc]"
                  }
                `}
                >
                  Card
                </button>

                <button
                  onClick={() => setPaymentMethod("upi")}
                  className={`py-4 rounded-2xl border transition

                  ${
                    paymentMethod === "upi"
                      ? "bg-[#1f1f1f] text-white border-[#1f1f1f]"
                      : "bg-white border-[#d8d3cc]"
                  }
                `}
                >
                  UPI
                </button>

                <button
                  onClick={() => setPaymentMethod("bank")}
                  className={`py-4 rounded-2xl border transition

                  ${
                    paymentMethod === "bank"
                      ? "bg-[#1f1f1f] text-white border-[#1f1f1f]"
                      : "bg-white border-[#d8d3cc]"
                  }
                `}
                >
                  Bank
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-6 mt-8">

                  <input
                    placeholder="Cardholder Name"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    placeholder="Card Number"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />

                  <div className="grid grid-cols-2 gap-5">

                    <input
                      placeholder="MM/YY"
                      className="border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                    />

                    <input
                      placeholder="CVV"
                      className="border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div className="space-y-6 mt-8">

                  <input
                    placeholder="UPI ID"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    placeholder="Name on UPI"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="space-y-6 mt-8">

                  <input
                    placeholder="Account Holder Name"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    placeholder="Bank Account Number"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    placeholder="IFSC Code"
                    className="w-full border border-[#d8d3cc] bg-white rounded-2xl px-5 py-4 outline-none"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#faf8f5] border border-[#e7e2db] rounded-[32px] p-10 h-fit">

            <h2 className="text-2xl font-semibold">
              Order Confirmation
            </h2>

            <button
              onClick={() => {
                clearCart()
                navigate("/completed")
              }}
              className="w-full mt-10 bg-[#1f1f1f] text-white py-5 rounded-full"
            >
              Complete Payment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Checkout