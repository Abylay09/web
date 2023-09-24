var addTwoPromises = async function(promise1, promise2) {
    let prom1 = await promise1
    let prom2 = await promise2
    return new Promise((resolve, reject) => {
        const sum = prom1 + prom2
        resolve(sum)
    })
};