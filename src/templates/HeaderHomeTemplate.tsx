import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CategoriesMenu from '../components/CategoriesMenu/CategoriesMenu'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

type Props = {}

export default function HeaderHomeTemplate ({}: Props) {
  const location = useLocation()
  return (
    <div>
      <Header />
      <CategoriesMenu />
      <div style={location.pathname !== "/" ? {marginTop:140} : {} }>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
