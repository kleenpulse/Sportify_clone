import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const Navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    Navigate(`/search/${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row jusfity-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          id="search-field"
          placeholder="search"
          type='search'
          value={searchTerm}
          autoComplete="off"
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4'
        />
      </div>
    </form>
  )
};

export default Searchbar;
