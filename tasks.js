// problem 1 
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(3, 4, 1))

// problem 2 
const multiLine = `
        I am a web developer
    	I love to code 
        I love eat biriyani            
`
// console.log(multiLine)

// problem 3 
const operation = (num1, num2=3) =>{
    const add = num1 + num2;
    const result = add / 2;
    return result
}
// console.log(operation(5))


// task 2 
const task2 = (friends) =>{
    let newArr =[];
    for(let i =0; i< friends.length; i++){
        let each = friends[i];
        if(each.length % 2 != 1){
            newArr.push(each)
        }
    }
    return newArr
}

let friends = ['Jamil', 'Hassan', 'Kamrul', 'Hasanat', 'Jubayer'];
let result = task2(friends)
// console.log(result)



// task 3 
const avgArr = (arr) =>{
    let sum =0;
    for(let i=0; i <arr.length; i++){
        let square = arr[i] ** 2;
        sum += square;
    }
    let avg = sum / arr.length;
    return avg;
}

const arr = [4, 6, 9, 2, 3];
const result2 = avgArr(arr);
// console.log(result2)


// task 4 
const merge = (arr1, arr2) =>{
    const combinedArr = [...arr1, ...arr2];
    let max = combinedArr[0];
    for(let i=0; i<combinedArr.length; i++){
        if(combinedArr[i] > max){
            max = combinedArr[i]
        }
    }
    return max 
}

const arr1 = [2, 5, 9];
const arr2 = [7, 1, 4];
const result3 = merge(arr1, arr2);
console.log(result3)