/**
 * Generate all combinations from a variant array
 *
 * @param {any[][]} variantArr
 * @return {any[][]} combinations
 */
export default function combinations(variantArr: any[][]) {
  // I'm gonna explain this using an example.
  // Let's say we have a shirt shop
  // and customer can choose options in 2 variants
  // - color: red, green, blue
  // - size: S, M, L
  // We're gonna find out all possible combinations of our shirts
  //
  let buffer: any[] = []

  // Main loop, loop through each optionArr
  variantArr.forEach((optionArr) => {
    if (!buffer.length) {
      buffer = optionArr.map((item) => [item])
    } else {
      const newBuffer: any[] = []

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
