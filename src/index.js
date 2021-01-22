/**
 * Generate all combinations from a variant array
 *
 * @param {any[][]} variantArr
 * @return {any[][]} combinations
 */
export default function combinations(variantArr) {
  let buffer = []

  variantArr.forEach((optionArr) => {
    if (!buffer.length) {
      buffer = optionArr.map((item) => [item])
    } else {
      const newBuffer = []

      buffer.forEach((bufferItem) => {
        optionArr.forEach((item) => {
          newBuffer.push([...bufferItem, item])
        })
      })

      buffer = newBuffer
    }
  })

  return buffer
}
