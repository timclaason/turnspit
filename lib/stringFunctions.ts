export const removeDiacritics = (input: string | undefined): string => {
  return input ?? ''.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
}

export const matchesRegex = (input: string, regexp: RegExp): boolean => {
  return regexp.test(input)
}

export const isCanadianPostalCode = (input: string): boolean => {
  return matchesRegex(
    input,
    new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i)
  )
}

export const isUSPostalCode = (input: string): boolean => {
  return matchesRegex(input, new RegExp('^\\d{5}(-{0,1}\\d{4})?$'))
}
