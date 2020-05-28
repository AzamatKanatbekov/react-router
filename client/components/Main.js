import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userLogin, setUserLogin] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`${userLogin}`)
    }
  }
  return (
    <div className="h-screen bg-teal-800 flex">
      <div className="m-auto bg-teal-500 p-32 rounded bg-opacity-500">
        <input
          type="text"
          onChange={(e) => setUserLogin(e.target.value)}
          onKeyDown={handleSearch}
          value={userLogin}
          className="bg-gray-200  p-3 text-black"
        />
        <button
          type="button"
          onClick={() => history.push(`${userLogin}`)}
          className="bg-gray-800 rounded text-white p-3 ml-3"
        >
          Search repo
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
