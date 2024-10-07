// this function count even number from an given array

function countEvenNumber(arr){
    let evenNumbers = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 === 0){
            evenNumbers++;
        }
    }

    return evenNumbers;
}


let numbers = [1, 3, 5, 9, 10, 8, 2, 78, 100, 108];

const evenNumbers = countEvenNumber(numbers);

console.log(evenNumbers);