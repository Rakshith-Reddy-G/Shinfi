import {Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import Checkout from "./pages/Checkout"
import Completed from "./pages/Completed"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/completed"
        element={
          <ProtectedRoute>
            <Completed />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default App