import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">
        404
      </h1>

      <p className="mt-4 text-gray-500">
        Page not found
      </p>

      <Link to="/">
        <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl">
          Go Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound