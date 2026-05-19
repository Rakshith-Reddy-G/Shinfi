import {Link} from "react-router-dom"

function EmptyState({
  title,
  description,
  buttonText,
  path,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">

      <div className="w-32 h-32 rounded-full bg-violet-100 flex items-center justify-center">
        <span className="text-5xl">
          🛍️
        </span>
      </div>

      <h2 className="text-4xl font-bold text-gray-900 mt-8">
        {title}
      </h2>

      <p className="text-gray-500 mt-4 max-w-md">
        {description}
      </p>

      <Link to={path}>
        <button className="mt-8 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-violet-200">
          {buttonText}
        </button>
      </Link>
    </div>
  )
}

export default EmptyState