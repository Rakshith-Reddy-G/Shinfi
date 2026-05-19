function SortDropdown({sort, setSort}) {
  return (
    <select
      value={sort}
      onChange={e => setSort(e.target.value)}
      className="bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all"
    >
      <option value="">
        Sort By
      </option>

      <option value="low">
        Price: Low → High
      </option>

      <option value="high">
        Price: High → Low
      </option>

      <option value="az">
        Title: A → Z
      </option>

      <option value="za">
        Title: Z → A
      </option>
    </select>
  )
}

export default SortDropdown