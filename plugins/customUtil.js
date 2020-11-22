export const formatPrice = (price) => {
  const res = []
  let counter = 0
  if (price > 0) {
    const reversed = Math.round(price).toString().split('').reverse()
    reversed.forEach((el) => {
      if (counter === 3) {
        res.push(`${el}.`)
        counter = 0
      } else {
        res.push(el)
      }
      counter++
    })
    return res.reverse().join('')
  }
}

export const formatType = (type) => {
  const startIdx = type.lastIndexOf('\\') + 1
  const formatedType = type.substr(startIdx)
  return formatedType
}
