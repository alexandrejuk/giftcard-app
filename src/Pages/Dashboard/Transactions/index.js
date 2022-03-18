import React, { useState, useEffect } from 'react'
import { useForm } from '@mantine/form'
import { pathOr } from 'ramda'

import TransactionsContainer from '../../../Container/Dashboard/Transactions'
import { getAllTransactions, buyCredits, getCredits } from '../../../services/gifCardApi'

const GiftCard = () => {
  const [opened, setOpened] = useState(false)
  const [data, setData] = useState([])
  const [creditTotal, setCreditTotal] = useState(0)
  const form = useForm({
    initialValues: {
      amount: '',
      card_holder_name: '',
      card_number: '',
      card_expiration_date: '',
      card_cvv: '',
    },
    validate: {},
  })

  const handleOpen = () => setOpened(true)
  const handleClose = () => setOpened(false)

  useEffect(() => {
    getAllTransactionsCompany()
  }, [])

  const getAllTransactionsCompany = async () => {
    try {
      const response = await getAllTransactions()
      const credit = await getCredits()
      setCreditTotal(pathOr(0, ['amount'], credit))
      setData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async values => {
    const amount = pathOr(0, ['amount'], values)
    const cardUser = {
      card_holder_name: values.card_holder_name,
      card_number: values.card_number.replace(/\D/g, ''),
      card_expiration_date: values.card_expiration_date.replace(/\D/g, ''),
      card_cvv: values.card_cvv.replace(/\D/g, ''),
    }
    try {
      const response = await buyCredits({ 
        amount,
        cardUser,
        paymentMethod: 'credit_card',
      })
      setData([...data, response])
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TransactionsContainer
      creditTotal={creditTotal}
      data={data}
      form={form}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      opened={opened}
    />
  )
}

export default GiftCard
