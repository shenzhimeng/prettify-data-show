
module.exports = function(str) {
    let s = str.slice(10)
    let sub = str.slice(0, 10)

    let index = 0
    do {
        sub += "\n" + s.slice(0, 64)
        index++
        s = str.slice(index * 64 + 10)
    } while (s.length >= 64)
    return sub
}