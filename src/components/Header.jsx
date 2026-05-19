import {Link} from "react-router-dom"
import {FiShoppingCart, FiMenu, FiX, FiUser} from "react-icons/fi"
import {useState} from "react"
import {NavLink} from "react-router-dom"
import useCartStore from "../store/cartStore"
import MiniCart from "./MiniCart"
import ProfileDropdown from "./ProfileDropdown"

function Header() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const cart = useCartStore(state => state.cart)

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5f3ef]/80 border-b border-[#e7e2db]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dogmt95ye/image/upload/v1779129258/Image_13_ec3wq5.png"
            className="w-15 h-20"
          />
          <h1 className="text-3xl font-semibold tracking-tight">
            shinfi
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">

        <NavLink
          to="/"
          className={({isActive}) =>
            `font-medium transition ${
              isActive
                ? "text-violet-600 border-b-2 border-violet-600 pb-1"
                : "text-gray-700 hover:text-violet-600"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({isActive}) =>
            `font-medium transition ${
              isActive
                ? "text-violet-600 border-b-2 border-violet-600 pb-1"
                : "text-gray-700 hover:text-violet-600"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({isActive}) =>
            `font-medium transition ${
              isActive
                ? "text-violet-600 border-b-2 border-violet-600 pb-1"
                : "text-gray-700 hover:text-violet-600"
            }`
          }
        >
          Cart
        </NavLink>
      </nav>

        <div className="flex items-center gap-5">

          <button
            onClick={e => {
              e.stopPropagation()
              setCartOpen(prev => !prev)
            }}
            className="relative"
          >
            <FiShoppingCart size={24} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() =>
                setProfileOpen(!profileOpen)
              }
              className="hover:opacity-70 transition"
            >
              <FiUser size={22} />
            </button>

            {profileOpen && (
              <ProfileDropdown
                close={() => setProfileOpen(false)}
              />
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
      )}

      {cartOpen && (
        <div onClick={e => e.stopPropagation()}>
          <MiniCart />
        </div>
      )}
    </header>
  )
}

export default Header