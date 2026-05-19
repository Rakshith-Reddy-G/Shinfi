import {create} from "zustand"

const persistedCart = JSON.parse(localStorage.getItem("shinfi-cart")) || []

const useCartStore = create((set, get) => ({
  cart: persistedCart,

  addToCart: product => {
    const existing = get().cart.find(item => item.id === product.id)

    let updatedCart

    if (existing) {
      updatedCart = get().cart.map(item =>
        item.id === product.id
          ? {...item, quantity: item.quantity + 1}
          : item
      )
    } else {
      updatedCart = [...get().cart, {...product, quantity: 1}]
    }

    localStorage.setItem("shinfi-cart", JSON.stringify(updatedCart))

    set({cart: updatedCart})
  },

  removeFromCart: id => {
    const updatedCart = get().cart.filter(item => item.id !== id)

    localStorage.setItem("shinfi-cart", JSON.stringify(updatedCart))

    set({cart: updatedCart})
  },

  increaseQty: id => {
    const updatedCart = get().cart.map(item =>
      item.id === id
        ? {...item, quantity: item.quantity + 1}
        : item
    )

    localStorage.setItem("shinfi-cart", JSON.stringify(updatedCart))

    set({cart: updatedCart})
  },

  decreaseQty: id => {
    const updatedCart = get()
      .cart
      .map(item =>
        item.id === id
          ? {...item, quantity: item.quantity - 1}
          : item
      )
      .filter(item => item.quantity > 0)

    localStorage.setItem("shinfi-cart", JSON.stringify(updatedCart))

    set({cart: updatedCart})
  },

  clearCart: () => {
    localStorage.removeItem("shinfi-cart")
    set({cart: []})
  },
}))

export default useCartStore