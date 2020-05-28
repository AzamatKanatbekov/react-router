import React from 'react'
import { Link } from 'react-router-dom'

const RepositoryList = (props) => {
  const filteredRepo = props.repositories.filter((el) => el.name.includes(props.find))
  return (
    <div>
      <img src={`${props.user.avatar_url}`} alt="" className="w-40 h-40 rounded-full m-auto p-5" />
      <table className="w-full my-30">
        <thead className="mb-20 text-xl">
          <tr>
            <th className="bg-teal-800 text-white  ">Repository name</th>
            <th className="bg-teal-700 text-white  ">Fork</th>
            <th className="bg-teal-600 text-white p-2 ">View readme</th>
          </tr>
        </thead>
        <tbody className="p-10">
          {filteredRepo.map((rep) => (
            <tr key={rep.id}>
              <td className="  p-3 text-center border  bg-teal-700  text-white">{rep.name}</td>
              <td className="  p-3 text-center border  bg-teal-700  text-white">
                <ul>
                  <li>
                    <span>
                      <svg
                        className="octicon octicon-repo-forked v-align-text-bottom"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      />
                      Fork
                    </span>
                    <span>{rep.forks_count}</span>
                  </li>
                </ul>
              </td>
              <td className="bg-teal-700 text-white border text-center  ">
                <Link to={`/${props.userName}/${rep.name}`}>View readme</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
