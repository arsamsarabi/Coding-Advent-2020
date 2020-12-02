import { PASSWORDS_ENTRIES } from './data'

type ParsedEntryType = [number, number, string, string]
type ParsedEntriesArrayType = ParsedEntryType[]

const parseEntryData = (entry: string[]): ParsedEntryType => {
  const [min, max] = entry[0].split('-')
  const letter = entry[1].split(':')[0]

  return [parseInt(min), parseInt(max), letter, entry[2]]
}

const validateEntryForPartOne = (
  min: number,
  max: number,
  letter: string,
  password: string
): boolean => {
  let occurrences = 0

  password.split('').forEach((char: string) => {
    if (char === letter) occurrences++
  })

  return min <= occurrences && occurrences <= max
}

const partOne = (entries: ParsedEntriesArrayType) => {
  const validEntries: ParsedEntryType[] = []

  entries.forEach((entry: ParsedEntryType) => {
    const [min, max, letter, password] = entry
    const isValid = validateEntryForPartOne(min, max, letter, password)
    if (isValid) validEntries.push(entry)
  })

  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 1:')
  console.log('|')
  console.log('| How many passwords are valid according to')
  console.log('| the policies.')
  console.log('-------------------------------------------')
  console.log('Number of Entries: ', PASSWORDS_ENTRIES.length)
  console.log('Number of valid passwords: ', validEntries.length)
  console.log()
}

const validateEntryForPartTwo = (
  posOne: number,
  posTwo: number,
  letter: string,
  password: string
): boolean => {
  const letterIsAtPosOne =
    password.charAt(posOne - 1) === letter &&
    password.charAt(posTwo - 1) !== letter

  const letterIsAtPosTwo =
    password.charAt(posOne - 1) !== letter &&
    password.charAt(posTwo - 1) === letter

  return letterIsAtPosOne || letterIsAtPosTwo
}

const partTwo = (entries: ParsedEntriesArrayType) => {
  const validEntries: ParsedEntryType[] = []

  entries.forEach((entry: ParsedEntryType) => {
    const [posOne, posTwo, letter, password] = entry
    const isValid = validateEntryForPartTwo(posOne, posTwo, letter, password)
    if (isValid) validEntries.push(entry)
  })

  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 2:')
  console.log('|')
  console.log('| How many passwords are valid according to')
  console.log('| the policies.')
  console.log('-------------------------------------------')
  console.log('Number of Entries: ', PASSWORDS_ENTRIES.length)
  console.log('Number of valid passwords: ', validEntries.length)
  console.log()
}

const main = () => {
  const parsedEntries: ParsedEntriesArrayType = PASSWORDS_ENTRIES.map(
    parseEntryData
  )
  partOne(parsedEntries)
  partTwo(parsedEntries)
}

main()
