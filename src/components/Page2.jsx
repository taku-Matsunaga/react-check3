import React from 'react'
import { Link } from 'react-router-dom'

const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/999">URL Parameter</Link>
      <Link to="/page2/999?name=hogehoge">URL Parameter</Link>
    </div>
  )
}

export default Page2
