import React, { useState, useEffect } from 'react'
import { getCardValidations, cardByValidate } from '../../../services/gifCardApi'

import CardValidateContainer from '../../../Container/Dashboard/CardValidate'

const CardValidate = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getCards()
  }, [])

  const getCards = async () => {
    try {
      const response = await getCardValidations()
      setData(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (id) => {
    try {
      await cardByValidate(id)
      getCards()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CardValidateContainer
      data={data}
      handleSubmit={handleSubmit}
      refresh={getCards}
    />
  )
}

export default CardValidate
