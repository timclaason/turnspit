export const isNil = (input: unknown): boolean => {
  return input === undefined || input === null
}

export const isArray = (input: unknown): boolean => {
  return Array.isArray(input)
}

export const isEmpty = (input: any): boolean => {
  if (isString(input)) return input === ''
  if (isArray(input)) return input.length === 0
  return false
}

export const isNilOrEmpty = (input: unknown): boolean => {
  return isNil(input) || isEmpty(input)
}

export const isNumber = (x: any): x is number => {
  return typeof x === 'number'
}

export const isString = (x: any): x is string => {
  return typeof x === 'string'
}

export const isDate = (x: string | number | Date): boolean => {
  return !isString(x) && !isNumber(x) && x instanceof Date
}

export const isBetween = (
  input: string | number | Date,
  val1: string | number | Date,
  val2: string | number | Date
): boolean => {
  const alpha = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  if (isNumber(input)) return input >= val1 && input <= val2
  if (
    isString(input) &&
    input.length === 1 &&
    isString(val1) &&
    val1.length === 1 &&
    isString(val2) &&
    val2.length === 1 &&
    alpha.includes(input) &&
    alpha.includes(val1) &&
    alpha.includes(val2)
  ) {
    return (
      alpha.indexOf(input) >= alpha.indexOf(val1) &&
      alpha.indexOf(input) <= alpha.indexOf(val2)
    )
  }
  if (isDate(input) && isDate(val1) && isDate(val2)) {
    return (
      new Date(input) >= new Date(val1) && new Date(input) <= new Date(val2)
    )
  }
  return false
}
