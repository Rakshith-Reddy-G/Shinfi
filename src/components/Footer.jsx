import {FiInstagram, FiTwitter, FiFacebook} from "react-icons/fi"

function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-blue-700">
            shinfi
          </h2>

          <p className="mt-4 text-gray-600">
            Premium shopping experience for modern lifestyles.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a>About</a>
          <a>Privacy</a>
          <a>Shipping</a>
          <a>Returns</a>
        </div>

        <div className="flex gap-5 text-2xl">
          <FiInstagram />
          <FiTwitter />
          <FiFacebook />
        </div>
      </div>

      <div className="border-t py-5 text-center text-gray-500">
        © 2026 shinfi. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer