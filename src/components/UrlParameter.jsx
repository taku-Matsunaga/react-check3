import React from 'react'
import { useParams, useLocation } from "react-router-dom"

const Urlparameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <>
      <h1>URLパラメーターページです</h1>
      <p>{id}</p>
      <p>クエリパラメーター : {query.get("name")}</p>
    </>
  )
}

export default Urlparameter
