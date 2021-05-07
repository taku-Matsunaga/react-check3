import React from 'react'
import Page2 from '../components/Page2'
import Urlparameter from '../components/UrlParameter'

const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <Urlparameter />
  }
]

export default Page2Routes
