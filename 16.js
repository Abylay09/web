var chunk = function(arr, size) {
    const myArr = []
    for (let i  = 0; i < arr.length; i+=size) {
        myArr.push(arr.slice(i, i + size))
    }
    return myArr
};