function binary_search(array, number) {
    low = 0
    high = array.length - 1
    mid = Math.ceil((low + high) / 2)
    //console.log(mid)
    count = 0
    while (mid <=  array.length - 1 &&  mid >= 0) {
        if (array[mid] > number) {
            high = mid
            mid = Math.ceil((low + high) / 2)
        } else if (array[mid] < number) {
            low = mid
            mid = Math.ceil((low + high) / 2)
        } else {
            console.log(count + 1)
            return(array[mid])
            
        }
        count++
    }
    console.log(count)
    return null

}
let array = [1, 2, 3, 4, 5, 6]


console.log("Число:" + binary_search(array, 6))