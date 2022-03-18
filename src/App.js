import React from 'react'
import { Routes, Route, } from "react-router-dom"
import Layout from './Components/Layout'

import Login from './Pages/Dashboard/Login'
import Home from './Pages/Dashboard/Home'
import CardValidate from './Pages/Dashboard/CardValidate'
import GiftCard from './Pages/Dashboard/GiftCard'
import Transacitons from './Pages/Dashboard/Transactions'
import CardActive from './Pages/Mobile/CardActive'
import MyCards from './Pages/Mobile/MyCards'

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" >
        <Route path="home" element={
          <Layout>
            <GiftCard />
          </Layout>
        }/>
        <Route path="card-validate" element={
          <Layout>
            <CardValidate />
          </Layout>
        }/>
        <Route path="transactions" element={
          <Layout>
            <Transacitons />
          </Layout>
        }/>
      </Route>
      <Route path="mobile">
        <Route path="card-active/:id" element={<CardActive />} />
        <Route path="mycards" element={<MyCards />} />
      </Route>
    </Routes>
  )
}

export default App
