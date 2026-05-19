function Filters({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Categories
      </h3>

      <div className="flex flex-wrap lg:flex-col gap-3">

        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-5 py-4 rounded-2xl transition capitalize

            ${
            selectedCategory === category
                ? "bg-[#1f1f1f] text-white"
                : "hover:bg-[#ebe7e0] text-[#4a4a4a]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filters