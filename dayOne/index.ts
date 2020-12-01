import { EXPENSES_AMOUNT } from './data'

type NumberOrNull = number | null

const partOne = (): void => {
  let result: NumberOrNull = null
  let numberOne: NumberOrNull = null
  let numberTwo: NumberOrNull = null

  for (let i = 0; i <= EXPENSES_AMOUNT.length; i++) {
    if (result) break

    for (let j = i + 1; j <= EXPENSES_AMOUNT.length; j++) {
      if (result) break

      if (EXPENSES_AMOUNT[i] + EXPENSES_AMOUNT[j] === 2020) {
        numberOne = EXPENSES_AMOUNT[i]
        numberTwo = EXPENSES_AMOUNT[j]
        result = numberOne * numberTwo
      }
    }
  }

  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 1:')
  console.log('|')
  console.log('| Find the two entries that sum to 2020 and')
  console.log('| then multiply those two numbers together.')
  console.log('-------------------------------------------')
  console.log('Number 1: ', numberOne)
  console.log('Number 2: ', numberTwo)
  console.log('Result: ', result)
  console.log()
}

const partTwo = (): void => {
  let result: NumberOrNull = null
  let numberOne: NumberOrNull = null
  let numberTwo: NumberOrNull = null
  let numberThree: NumberOrNull = null

  for (let i = 0; i <= EXPENSES_AMOUNT.length; i++) {
    if (result) break

    for (let j = i + 1; j <= EXPENSES_AMOUNT.length; j++) {
      if (result) break

      for (let k = i + 2; k <= EXPENSES_AMOUNT.length; k++) {
        if (result) break

        if (
          EXPENSES_AMOUNT[i] + EXPENSES_AMOUNT[j] + EXPENSES_AMOUNT[k] ===
          2020
        ) {
          numberOne = EXPENSES_AMOUNT[i]
          numberTwo = EXPENSES_AMOUNT[j]
          numberThree = EXPENSES_AMOUNT[k]
          result = numberOne * numberTwo * numberThree
        }
      }
    }
  }

  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 2:')
  console.log('|')
  console.log('| Find three numbers in your expense report')
  console.log('| that meet the same criteria.')
  console.log('-------------------------------------------')
  console.log('Number 1: ', numberOne)
  console.log('Number 2: ', numberTwo)
  console.log('Number 3: ', numberThree)
  console.log('Result: ', result)
  console.log()
}

partOne()
partTwo()
