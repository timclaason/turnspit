export const removeDiacritics = (input: string | undefined): string => {
  return input ?? ''.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
}
