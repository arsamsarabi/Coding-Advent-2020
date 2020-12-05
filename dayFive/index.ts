import { getParsedBoardingPasses } from './data'

const MAX_ROWS = 127
const MAX_COLS = 7

const getRow = (code: string): number => {
  const result = code.split('').reduce(
    (acc, cur) => {
      if (cur === 'F') {
        const middle = acc[1] - Math.floor((acc[1] - acc[0]) / 2) - 1
        return [acc[0], middle]
      }

      const middle = acc[1] - Math.ceil((acc[1] - acc[0]) / 2) + 1
      return [middle, acc[1]]
    },
    [0, MAX_ROWS]
  )
  return result[0]
}

const getColumn = (code: string): number => {
  const result = code.split('').reduce(
    (acc, cur) => {
      if (cur === 'L') {
        const middle = acc[1] - Math.floor((acc[1] - acc[0]) / 2) - 1
        return [acc[0], middle]
      }

      const middle = acc[1] - Math.ceil((acc[1] - acc[0]) / 2) + 1
      return [middle, acc[1]]
    },
    [0, MAX_COLS]
  )

  return result[0]
}

const getSeatID = (row: number, column: number): number => row * 8 + column

const getAllSeatIDs = () => {
  const boardingPasses = getParsedBoardingPasses()
  return boardingPasses.map((pass: string) => {
    const row = getRow(pass.substring(0, 7))
    const column = getColumn(pass.substring(7, 10))
    return getSeatID(row, column)
  })
}

const partOne = () => {
  const boardingPasses = getParsedBoardingPasses()

  const highestSeatID = boardingPasses.reduce((acc, cur) => {
    const row = getRow(cur.substring(0, 7))
    const column = getColumn(cur.substring(7, 10))
    const seatID = getSeatID(row, column)
    if (seatID > acc) return seatID
    return acc
  }, 0)

  console.log()
  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 1:')
  console.log('|')
  console.log('| Look through your list of boarding passes.')
  console.log('| What is the highest seat ID on a boarding')
  console.log('| pass?')
  console.log('-------------------------------------------')
  console.log('Highest seat ID: ', highestSeatID)
  console.log()
}

const partTwo = () => {
  const sortAscending = (a: number, b: number): number => a - b
  const allSeatIDs = getAllSeatIDs().sort(sortAscending)

  let seatId = allSeatIDs[0]
  for (let i = 0; i <= allSeatIDs.length; i++) {
    if (allSeatIDs[i] !== seatId) break
    seatId++
  }

  console.log()
  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 2:')
  console.log('|')
  console.log('| Your seat should be the only missing!')
  console.log('| What is the ID of your seat?')
  console.log('-------------------------------------------')
  console.log('My seat ID: ', seatId)
  console.log()
}

partOne()
partTwo()
