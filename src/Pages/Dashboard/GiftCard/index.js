import React, { useState, useEffect } from 'react'
import { useForm } from '@mantine/form'
import { pathOr } from 'ramda'

import GiftCardContainer from '../../../Container/Dashboard/GiftCard'
import { getGiftCards, createGiftCardService } from '../../../services/gifCardApi'

const GiftCard = () => {
  const [opened, setOpened] = useState(false)
  const [showGiftCard, setShowGiftCard] = useState(false)
  const [giftCardSelected, setShowGiftCardSelected] = useState(false)

  const [data, setData] = useState([])
  const form = useForm({
    initialValues: {
      giftCardType: '',
      value: '',
    },
    validate: {},
  })

  const handleOpen = () => setOpened(true)
  const handleClose = () => setOpened(false)
  const handleOpenGiftCard = (giftCard) => {
    setShowGiftCardSelected(giftCard)
    setShowGiftCard(true)
  }
  const handleGiftCardClose = () => setShowGiftCard(false)

  useEffect(() => {
    getGiftCardsCompany()
  }, [])

  const getGiftCardsCompany = async () => {
    try {
      const response = await getGiftCards()
      setData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async values => {
    const giftCardType = pathOr('plan', ['giftCardType'], values)
    const giftCardTypeValue = pathOr(0, ['value'], values)

    try {
      const response = await createGiftCardService({ 
        giftCardType, 
        [giftCardType]: giftCardTypeValue, 
      })
      setData([...data, response])
      handleClose()
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <GiftCardContainer
      data={data}
      form={form}
      giftCardSelected={giftCardSelected}
      handleOpen={handleOpen}
      handleOpenGiftCard={handleOpenGiftCard}
      handleClose={handleClose}
      handleGiftCardClose={handleGiftCardClose}
      handleSubmit={handleSubmit}
      opened={opened}
      showGiftCard={showGiftCard}
    />
  )
}

export default GiftCard
