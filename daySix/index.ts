import { getParsedAnswers } from './data'

const partOne = () => {
  const parsedAnswers = getParsedAnswers()

  const groupAnswersCount = parsedAnswers.map((group: string[][]): number => {
    const answersForGroup: string[] = []
    group.forEach((person: string[]) => {
      person.forEach((answer: string) => {
        if (!answersForGroup.includes(answer)) answersForGroup.push(answer)
      })
    })
    return answersForGroup.length
  })

  const result = groupAnswersCount.reduce((a: number, b: number) => a + b, 0)

  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 1:')
  console.log('|')
  console.log('| For each group, count the number of')
  console.log('| questions to which anyone answered "yes".')
  console.log('| What is the sum of those counts?')
  console.log('-------------------------------------------')
  console.log('Result: ', result)
  console.log()
}

const partTwo = () => {
  const parsedAnswers = getParsedAnswers()
  const groupAnswersCount = parsedAnswers.map((group: string[][]): number => {
    let answersForGroup: string[] = group[0]
    group.forEach((person: string[]) => {
      answersForGroup = answersForGroup.filter((answer: string) =>
        person.includes(answer)
      )
    })
    return answersForGroup.length
  })

  const result = groupAnswersCount.reduce((a: number, b: number) => a + b, 0)

  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 2:')
  console.log('|')
  console.log('| For each group, count the number of')
  console.log('| questions to which everyone answered')
  console.log('| "yes". What is the sum of those counts?')
  console.log('-------------------------------------------')
  console.log('Result: ', result)
  console.log()
}

partOne()
partTwo()
