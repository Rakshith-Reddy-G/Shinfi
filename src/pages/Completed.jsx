import {Link} from "react-router-dom"

function Completed() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-5">

      <div className="bg-[#faf8f5] border border-[#e7e2db] rounded-[40px] p-14 text-center max-w-2xl">

        <div className="w-28 h-28 rounded-full bg-[#ebe7e0] mx-auto flex items-center justify-center text-5xl">
          ✓
        </div>

        <h1 className="text-5xl font-semibold mt-10">
          Order Confirmed
        </h1>

        <p className="text-[#6b6b6b] text-lg mt-6 leading-8">
          Thank you for shopping with Shinfi.
          Your order has been placed successfully.
        </p>

        <Link to="/">
          <button className="mt-10 bg-[#1f1f1f] text-white px-10 py-5 rounded-full">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Completed