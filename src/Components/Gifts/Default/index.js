import { pathOr } from 'ramda'
import React from 'react'
import styles from './style.module.css'
import { parseCurrency } from '../../../utils/currency'
import LOGO from '../../../assets/logo/fnz.png'

const GiftCardDefault = ({
  giftCardSelected,
  logo,
}) => {
  const giftType = pathOr('', ['giftCardType'], giftCardSelected)
  let infoCardNormalize = pathOr(0, [giftType], giftCardSelected)
  const types = {
    'plan': 'Dias',
    'discount': '% off',
    'amount': ''
  }

  if(types === "amount") {
    infoCardNormalize = parseCurrency(infoCardNormalize)
  }

  const labels = {
    "amount": "R$ ",
    "discount": "",
    "plan": ""
  }
  return (
    <div className={styles.cardTemplate}>
      <div className={styles.cardHeader}>
        <h4 className={styles.infoTitle}>{labels[giftType]} {infoCardNormalize} {types[giftType]}</h4>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.logo}>
          <img src="https://www.boxjdmar.com/img/logo.png" height="100px" alt="company logo" />
        </div>
        <div className={styles.cardBodyInfo}>
          <h5>Cartão</h5>
          <h4 className={styles.subtitleCardBody}>PRESENTE</h4>
        </div>
      </div>
      <div className={styles.triangle}></div>
      <div className={styles.triangleDown}></div>
    </div>
  )
}

export default GiftCardDefault
