var filter = function(arr, fn) {
    const arr = []

    arr.forEach((item, index) => {
        if (fn(item, index)) {
            arr.push(item)
        }
    })
    return arr
};