const checkMinMax = (value: string, min: number, max: number): boolean =>
  min <= parseInt(value) && parseInt(value) <= max

const isHeightValid = (height: string): boolean => {
  let isValid = false
  if (height.includes('in')) {
    const parsedHeight = height.substring(0, height.indexOf('in'))
    isValid = checkMinMax(parsedHeight, 59, 76)
  }
  if (height.includes('cm')) {
    const parsedHeight = height.substring(0, height.indexOf('cm'))
    isValid = checkMinMax(parsedHeight, 150, 193)
  }
  return isValid
}

const isHairColourValid = (hairColour: string): boolean => {
  return /^#[0-9A-F]{6}$/i.test(hairColour)
}

const isEyeColourValid = (eyeColour: string): boolean => {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(eyeColour)
}

const isPassportIDValid = (passportID: string): boolean => {
  return /^[0-9]{9}$/i.test(passportID)
}

export const isPassportValid = (
  passport: {
    [key in string]: string
  }
): boolean => {
  const byr = checkMinMax(passport.byr, 1920, 2002)
  const iyr = checkMinMax(passport.iyr, 2010, 2020)
  const eyr = checkMinMax(passport.eyr, 2020, 2030)
  const hgt = isHeightValid(passport.hgt)
  const hcl = isHairColourValid(passport.hcl)
  const ecl = isEyeColourValid(passport.ecl)
  const pid = isPassportIDValid(passport.pid)

  return [byr, iyr, eyr, hgt, hcl, ecl, pid].every((check) => check)
}
