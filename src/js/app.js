function exportObjectProperties (obj, keys) {
    const array1 = [], array2 = []
    for (const key in obj) {
        if (keys.includes(key)) {
            array1.push({key: key, value: obj[key]})
        }
        else {
            array2.push({key: key, value: obj[key]})
        }        
    }
    array1.sort(
        (a, b) => keys.indexOf(a.key) - keys.indexOf(b.key)
    )
    array2.sort(
        (a, b) => a.key < b.key ? -1 : 1
    )

    return array1.concat(array2)
}

module.exports = {
    exportObjectProperties
}
