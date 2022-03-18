const parseCurrency = (currencyValue = null) => {
  let value = "R$ 0,00"
  if(currencyValue) {
    const strAmount = String(currencyValue)
    if(strAmount.length === 1 || strAmount.length === 2) {
      value = `R$ ${strAmount},00`
    }

    if(strAmount.length >= 3 && strAmount.length < 6) {
      value = `R$ ${strAmount.slice(0, strAmount.length-2)},${strAmount.slice(strAmount.length-2)}`
    }
    
    if(strAmount.length >= 6 && strAmount.length < 9) {
      value = `R$ ${strAmount.slice(0, strAmount.length-5)}.${strAmount.slice(strAmount.length-5, strAmount.length-2)},${strAmount.slice(strAmount.length-2)}`
    }
    
    if(strAmount.length >= 9 && strAmount.length < 12) {
      value = `R$ ${strAmount.slice(0, strAmount.length-8)}.${strAmount.slice(strAmount.length-8, strAmount.length-5)}.${strAmount.slice(strAmount.length-5, strAmount.length-2)},${strAmount.slice(strAmount.length-2)}`
    }
    return value
  }
  return value
}

export {
  parseCurrency,
}
