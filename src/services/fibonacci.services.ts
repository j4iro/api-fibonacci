class FibonacciServices {
  /**
   * Get fibonacci number by index
   * @param index
   * @returns number
   */
  getFibonacciByIndex(index: number): number {
    let numberA = 0
    let numberB = 1
    let numberC = 0

    for (let i = 2; i <= index; i++) {
      numberC = numberA + numberB
      numberA = numberB
      numberB = numberC
    }

    return numberC
  }
}

export default new FibonacciServices()
