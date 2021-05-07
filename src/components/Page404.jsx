import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/" >戻る</Link>
    </div>
  )
}

export default Page404
