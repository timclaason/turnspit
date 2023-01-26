import { isDate } from "./object-states"

export const getDateDifferenceInSeconds = (beginDate, endDate) => {
    if(isDate(beginDate) && isDate(endDate)) return (endDate.getTime() - beginDate.getTime()) / 1000
    return -1
}