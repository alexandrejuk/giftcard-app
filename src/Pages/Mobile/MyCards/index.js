import { pathOr } from 'ramda'
import React, { useEffect, useState } from 'react'

import MyCardsContainer from '../../../Container/Mobile/MyCards'
import { myGifts } from '../../../services/gifCardApi'

const MyCards = () => {
  const [data, setData] = useState({ giftCards: [], companyName: '', customerName: ''})
  const [cardSelected, setCardSelected] = useState(null)

  useEffect(() => {
    mygiftsCard()
  }, [])

  const mygiftsCard = async () => {
    try {
      const response = await myGifts("11965035205")
      setData(pathOr({}, ['data'], response))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelectCard = (id) => {
    if(cardSelected === id) {
      return setCardSelected(null)
    }

    return setCardSelected(id)
  }
 
  return (
    <MyCardsContainer
      data={data}
      handleSelectCard={handleSelectCard}
      cardSelected={cardSelected}
    />
  )
}

export default MyCards
