//basic working example of callback and higher order functions

var testArray = [1,2,3,4,5,6];

function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) { return i; }
    }
    return -1;
}

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }    
}

var a = findIndex(testArray, function(number, index, array) {
    return number === 7; 
});

forEach(testArray, function(number, index, array) {
    console.log(number*2);
});

console.log(a);
