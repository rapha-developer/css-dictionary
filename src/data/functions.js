function decreaseKeyToLessThanFour(key) {
    const limit = 3
    const four = 4
    let newKey = key
    while(newKey > limit) {
        newKey = newKey - four
    }
    return newKey
}
export {
    decreaseKeyToLessThanFour
}