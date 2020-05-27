let numbers = [1,2,3,4,5,2,53,13,678,1,1]

let uniqueSet = new Set(numbers)

uniqueSet.add(60)

uniqueSet.add('Ufuk')

uniqueSet.add({
    city:'Amsterdam',
    isGood: true
})

uniqueSet.delete(4)

console.log(uniqueSet.has(60))

console.log(`The size of the set is: ${uniqueSet.size}`)

//console.log(uniqueSet)

//uniqueSet.forEach(item => console.log(item))

// for(let item of uniqueSet){
//     console.log(item)
// }

// let iterator = uniqueSet.values()

// console.log(iterator.next())
// console.log(iterator.next())

let uniqueArry = Array.from(uniqueSet)

console.log(uniqueArry)
console.log(uniqueArry[0])

let text = 'aserlhtjsvnnalurhasdjvaneruhtaljsdf'

console.log( new Set(text).size )