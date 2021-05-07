import React from 'react'
import { useLocation, useHistory } from "react-router-dom"

const Page1Detaila = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  )
}

export default Page1Detaila
