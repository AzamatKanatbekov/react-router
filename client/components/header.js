import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    props.handleFind(e.target.value)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        <NavLink to="/" className="text-white mr-6">
          Home
        </NavLink>
        {props.readme && (
          <NavLink to={`/${props.userName}`} className="text-white">
            Repositories
          </NavLink>
        )}
      </div>
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        className="bg-gray-300 "
        placeholder="search..."
      />
    </nav>
  )
}

export default React.memo(Header)
