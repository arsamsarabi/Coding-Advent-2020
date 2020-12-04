import { PASSPORT_DATA } from './data'
import { isPassportValid } from './validation'
/*
  byr (Birth Year) - four digits; at least 1920 and at most 2002.
  iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  hgt (Height) - a number followed by either cm or in:
      If cm, the number must be at least 150 and at most 193.
      If in, the number must be at least 59 and at most 76.
  hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  pid (Passport ID) - a nine-digit number, including leading zeroes.
  cid (Country ID) - ignored, missing or not.
*/

type PassportType = {
  [key in string]: string
}

const parsePassportData = (): PassportType[] => {
  const passportsArray = PASSPORT_DATA.split('\n\n').map(
    (passportString: string) => {
      const passport: PassportType = {}
      passportString.split(/\s+/).forEach((field: string) => {
        const temp = field.split(':')
        passport[temp[0]] = temp[1]
      })
      return passport
    }
  )

  return passportsArray
}

const getPassportsWithValidFields = (): PassportType[] => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
  const passports: PassportType[] = parsePassportData()
  return passports.filter((passport: PassportType) => {
    return requiredFields.every((field: string) => passport[field])
  })
}

const partOne = () => {
  const numberOfValidPassports = getPassportsWithValidFields().length

  console.log()
  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 1:')
  console.log('|')
  console.log('| Count the number of valid passports - those')
  console.log('| that have all required fields.')
  console.log('-------------------------------------------')
  console.log('Number of valid passports: ', numberOfValidPassports)
  console.log()
}

const partTwo = () => {
  const completePassports = getPassportsWithValidFields()
  const validPassports = completePassports.filter(isPassportValid)

  console.log()
  console.log()
  console.log('-------------------------------------------')
  console.log('| Part 2:')
  console.log('|')
  console.log('| Count the number of valid passports')
  console.log('| those that have all required fields and')
  console.log('| valid values.')
  console.log('-------------------------------------------')
  console.log('Number of valid passports: ', validPassports.length)
  console.log()
}

partOne()
partTwo()
