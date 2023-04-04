function findSmallest(array) {
    smallest = array[0]
    smallest_index = 0
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < smallest) {
            smallest = array[i]
            smallest_index = i
        }
    }
    return smallest_index
}

function selectionSort(array) {
    new_array = []
    while(array.length != 0) {
        smallest_index = findSmallest(array)
        new_array.push(array[smallest_index])
        array.splice(smallest_index, 1)
        i = 0
    }
    return(new_array)
}
array = [4, 5, 1, 2, 7, 6, 8, 0, 9]
array1 = [4, 5, 1, 2, 7, 6, 8, 0, 9]
console.log(selectionSort(array))
console.log(array1.sort())