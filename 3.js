let showArray = document.getElementById('sort');
let showOdd = document.getElementById('odd');
let showEven = document.getElementById('even');

let arr = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];

function numberOdd(arr) {
    if (arr % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

function numberEven(arr) {
    if (arr % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function bubbleSort() {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    showArray.innerText = `${arr}`;
    showOdd.innerText = arr.filter(numberOdd)
    showEven.innerText = arr.filter(numberEven)
}

bubbleSort();
