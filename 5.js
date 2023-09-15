var map = function(arr, fn) {
    let newArr = []
    arr.forEach((item, index) => {
        newArr.push(fn(item, index))
    })
    return newArr
};