import { SLOPES_MAP } from './data'

const TREE_MARKER = '#'

const countTreesInMyWay = (movementPattern: number[]): number => {
  const MOVE_X_BY = movementPattern[0]
  const MOVE_Y_BY = movementPattern[1]
  let treesEncountered = 0
  let posX = 0

  for (let y = 0; y < SLOPES_MAP.length; y = y + MOVE_Y_BY) {
    const line = SLOPES_MAP[y]
    if (line[posX] === TREE_MARKER) treesEncountered++
    posX += MOVE_X_BY
    if (posX > line.length - 1) posX = posX - line.length
  }

  return treesEncountered
}

const partOne = () => {
  const treesEncountered = countTreesInMyWay([3, 1])

  console.log()
  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 1:')
  console.log('|')
  console.log('| Starting at the top-left corner of your')
  console.log('| map and following a slope of right 3 and')
  console.log('| down 1, how many trees would you encounter?')
  console.log('-------------------------------------------')
  console.log('Trees encountered: ', treesEncountered)
  console.log()
}

const partTwo = () => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ]

  const result = slopes.reduce((acc, cur) => {
    if (acc === 0) return countTreesInMyWay(cur)
    return acc * countTreesInMyWay(cur)
  }, 0)

  console.log()
  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 2:')
  console.log('|')
  console.log('| What do you get if you multiply together')
  console.log('| the number of trees encountered on each of')
  console.log('| the listed slopes?')
  console.log('-------------------------------------------')
  console.log('Trees encountered: ', result)
  console.log()
}

partOne()
partTwo()
