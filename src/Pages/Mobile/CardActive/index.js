import { pathOr } from 'ramda'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useForm } from '@mantine/form'

import CardActiveContainer from '../../../Container/Mobile/CardActive'
import { getActivatedGiftCard, activatedCard } from '../../../services/gifCardApi'

const CardActive = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [opened, setOpened] = useState(false)

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      phone: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  useEffect(() => {
    getActivatedGiftCardCustomer()
  }, [])

  const getActivatedGiftCardCustomer = async () => {
    try {
      const response = await getActivatedGiftCard(id)
      setData(pathOr({}, ['data'], response))
    } catch (error) {
      console.log(error)
    }
  }

  const handleOpen = () => setOpened(true)
  const handleClose = () => setOpened(false)
  
  const handleSubmit = async values => {
    try {
      const response = await activatedCard(id, values)
      setData(pathOr({}, ['data'], response))
      handleClose()
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }

 
  return (
    <CardActiveContainer
      data={data}
      form={form}
      handleSubmit={handleSubmit}
      opened={opened}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  )
}

export default CardActive
