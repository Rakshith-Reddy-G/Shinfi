function ErrorState({message, retry}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <div className="w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">
        <span className="text-5xl">
          ⚠️
        </span>
      </div>

      <h2 className="text-4xl font-bold text-gray-900 mt-6">
        Something went wrong
      </h2>

      <p className="text-gray-500 mt-3 max-w-md">
        {message}
      </p>

      <button
        onClick={retry}
        className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl transition shadow-lg"
      >
        Retry
      </button>
    </div>
  )
}

export default ErrorState