
function qick_sort(array) {
    if (array.length < 2) {
        return array
    } else {
        let num = array[0]
        less = []
        greater = []
        for (let i = 1; i < array.length; i++){
            
                if (array[i] <= num) {
                    less.push(array[i])
                } else {
                    greater.push(array[i])
                }   
        }
        return [
            ...qick_sort(less),
            num,
            ...qick_sort(greater)
          ]
        
    }
}
array = [6, 5, 4, 3]

console.log(qick_sort(array))