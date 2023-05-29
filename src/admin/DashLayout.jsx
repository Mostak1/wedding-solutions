import React from 'react'
import Header from './components/common/Header'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default DashLayout;
