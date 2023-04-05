function countdown(i) {
    console.log(i)
    if (i <= 0) {
        return
    }
    countdown(i - 1)
}
//countdown(5)
function factorial(x) {
    if (x == 1) {
        console.log(1)
        return 1
    } else {
        n = x * factorial(x - 1)
        console.log(n)
        return n
        //return x * factorial(x - 1)
    }
}
//factorial(3)

function sum_array(array){
    if(array.length == 0) {
        return 0
    } else {
        sum = array.shift() + sum_array(array)
        
        return sum
    }
}
array = [2, 4, 6]
//console.log(sum_array(array))

function count_elem(array) {
    if (array.length == 1) {
        return 1
    } else {
        array.pop()
        count = 1 + count_elem(array)
        //console.log(count)
        return count
    }
}
array = [2, 4, 6]
//console.log(count_elem(array))

function the_biggest_num(array) {
    if (array.length == 2) {
        if (array[0] > array[1]) {
            return array[0]
        } else {
            return array[1]
        }
    } else {
        first = array.shift()
        others = the_biggest_num(array)
        if (first > others) {
            return first
        } else {
            return others
        }
        
    }
}
array = [2, 4, 6]
console.log(the_biggest_num(array))
