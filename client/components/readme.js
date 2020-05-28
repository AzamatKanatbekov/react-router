import React from 'react'm
import Markdown from 'markdown-to-jsx'
import Hashloader from 'react-spinners/RingLoader'
import './readme.scss'

const Readme = (props) => {
  if (!props.readme) {
    return <Hashloader  size={40} color="#123abc" />
  }
  return (
    <div className="flex">
      <Markdown className="markdown-body m-auto ">{props.readme}</Markdown>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
