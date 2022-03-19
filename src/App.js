import React from 'react'
import { Routes, Route, } from "react-router-dom"
import Layout from './Components/Layout'

import Login from './Pages/Dashboard/Login'
import CardValidate from './Pages/Dashboard/CardValidate'
import GiftCard from './Pages/Dashboard/GiftCard'
import Transacitons from './Pages/Dashboard/Transactions'
import CardActive from './Pages/Mobile/CardActive'
import MyCards from './Pages/Mobile/MyCards'
import ProtectedRoute from './protectRoute'

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" >
        <Route path="home" element={
          <ProtectedRoute>
            <Layout>
              <GiftCard />
            </Layout>
          </ProtectedRoute>
        }/>
        <Route path="card-validate" element={
          <ProtectedRoute>
            <Layout>
              <CardValidate />
            </Layout>
          </ProtectedRoute>
        }/>
        <Route path="transactions" element={
          <ProtectedRoute>
            <Layout>
              <Transacitons />
            </Layout>
          </ProtectedRoute>
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
