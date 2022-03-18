import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useForm } from '@mantine/form'

import auth from '../../../services/auth'
import LoginContainer from '../../../Container/Dashboard/Login'

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    if (loggedIn){
      return navigate("/dashboard/home")
    }
  },[loggedIn, navigate]);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const handleSubmit = async values => {
    try {
      const response = await auth(values)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user.name', response.data.user.name)
      setLoggedIn(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginContainer
      form={form}
      handleSubmit={handleSubmit}
    />
  )
}

export default Login
