import {FiSearch, FiX} from "react-icons/fi"

function SearchBar({search, setSearch}) {
  return (
    <div className="relative w-full">

      <FiSearch
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search premium products..."
        className="w-full bg-[#faf8f5] border border-[#e7e2db] rounded-full py-4 pl-14 pr-14 outline-none focus:border-[#1f1f1f]"      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
        >
          <FiX size={20} />
        </button>
      )}
    </div>
  )
}

export default SearchBar