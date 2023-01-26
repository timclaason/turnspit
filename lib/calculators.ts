export const getDateDifferenceInSeconds = (
  beginDate: Date,
  endDate: Date
): number => {
  return (endDate.getTime() - beginDate.getTime()) / 1000
}
