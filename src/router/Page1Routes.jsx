import React from 'react'
import Page1 from '../components/Page1'
import Page1Detaila from '../components/Page1DetailA'
import Page1Detailb from '../components/Page1DetailB'

const Page1Routes = () => [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1Detaila />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1Detailb />
  }
]

export default Page1Routes
