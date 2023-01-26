export const isNil = (input) => {
    return input === undefined || input === null
}

export const isString = (input) => {
    return typeof input === 'string' || input instanceof String
}

export const isArray = (input) => {
    return Array.isArray(input)
}

export const isEmpty = (input) => {
    if(isString(input)) return input === ''
    if(isArray(input)) return input.length === 0
    return false
}

export const isNumber = (input) => {
    if (typeof input != "string")
    return !isNaN(input) && !isNaN(parseFloat(input))
}

export const isDate = (input) => {
    return Object.prototype.toString.call(input) === '[object Date]'
}

export const isNilOrEmpty = (input) => {
    return isNil(input) || isEmpty(input)
}

export const isBetween = (input, val1, val2) => {
    const alphabet = new Map()([
        ["a", 0], ["b", 1], ["c", 2], ["d", 3], ["e", 4], ["f", 5],
        ["g", 6], ["h", 7], ["i", 8], ["j", 9], ["k", 10], ["l", 11],
        ["m", 12], ["n", 13], ["o", 14], ["p", 15], ["q", 16], ["r", 17],
        ["s", 18], ["t", 19], ["u", 20], ["v", 21], ["w", 22], ["x", 23],
        ["y", 24], ["z", 25]
    ])
    if(isNumber(input)) return input >= val1 && input <= val2
    if(isString(input) && input.length === 1 && val1.length === 1 && val2.length === 1 && alphabet.has(input) && alphabet.has(val1) && alphabet.has(val2)) {
        return alphabet.get(input) >= alphabet.get(val1) && alphabet.get(input) <= alphabet.get(val2)
    }
    if(isDate(input) && isDate(val1) && isDate(val2)) {
        return new Date(input) >= new Date(val1) && new Date(input) <= new Date(val2)
    }
    return false
}
