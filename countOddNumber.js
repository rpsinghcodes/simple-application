// this function count odd number from an given array

function countOddNumber(arr){
    let oddNumbers = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !== 0){
            oddNumbers++;
        }
    }

    return oddNumbers;
}


let numbers = [1, 3, 5, 9, 10, 8, 2, 78, 100, 108];

const oddNumbers = countOddNumber(numbers);

console.log(oddNumbers);