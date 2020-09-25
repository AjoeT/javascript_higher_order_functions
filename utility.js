
let arr = [1, 2, 100, 3];
var indentity = num => num;
var cube = num => num ** 3;

console.log("Array length empty :", myLength([]));
console.log("Array length :", myLength(arr));
console.log("mypush :", myPush(arr, 4));
console.log("Head is : " + head(arr));
console.log("Head for empty arry is : " + head([]));
console.log("Tail empty is " + tail([]));
console.log("Tail is " + tail(arr));
console.log("Last of [] is " + last([]));
console.log("Last of arr is " + last(arr));
console.log("Take of [] is " + take([], 2));
console.log("Take of arr is " + take(arr, 2));
console.log("Drop  of [] is " + drop([], 2));
console.log("Drop of arr is " + drop(arr, 2));
console.log("init of arr is " + init([], 2));
console.log("init of arr is " + init(arr, 2));
console.log("Reverse of arr is " + reverse(arr));
console.log("Max of arr is " + max(arr));
console.log("Min of arr is " + min(arr));
console.log("Contains of arr is " + contains(arr, 5));
console.log("Contains of arr is " + contains([{ a: 1 }, { b: 1 }], { b: 1 }));
console.log("Sum of arr is " + sum([1, 2, 3]))
console.log("Sum of squares of arr is " + sumOfSquares([1, 2, 3]))
console.log("Range of arr is " + range(0, 5))
console.log("Sum of squares of arr is " + sumOfSquares([1, 2, 3]))
console.log("map is is " + map([1, 2, 3], indentity))
console.log("map is is " + map([1, 2, 3], cube))
console.log("Filter is " + filter([], num => true))
console.log("Filter is " + filter([1, 2, 3], num => num > 1))
console.log("Filter is " + filter([1, 2, 3], num => true))
console.log("Filter is " + filter([1, 2, 3, 4], num => num % 2 === 0))
console.log("Reduce is " + reduce([1, 2, 3, 4], (accumulator, currentValue) => accumulator + currentValue))
console.log("Reduce is " + reduce([1, 2, 3, 4], (accumulator, currentValue) => accumulator + currentValue, 30))
const x = cycle([1, 2, 3]);
console.log("Next is " + x.next())
console.log("Next is " + x.next())
console.log("Next is " + x.next())
console.log("Next is " + x.next())

function myLength(collection, index = 0) {
    if (collection[index] == undefined) {
        return 0;
    }
    else {
        return 1 + myLength(collection, ++index);;
    }
}

function myPush(array, pushElement) {
    const resultArray = [...array]
    var length = myLength(array);
    resultArray[length] = pushElement;
    return resultArray;
}

function head(collection) {
    let head = collection[0];
    return head;
}

function tail(collection, length = 1, result = []) {
    if (length < myLength(collection)) {
        var pushedArray = myPush(result, collection[length]);
        return tail(collection, ++length, pushedArray);
    }
    else {
        return result;
    }
}

function map(collection, mapFunc, index = 0, mapArray = []) {
    var length = myLength(collection)

    if (index >= length) {
        return mapArray;
    }
    else {
        const result = mapFunc(collection[index], index, collection);
        const pushArrray = myPush(mapArray, result)
        return map(collection, mapFunc, ++index, pushArrray);
    }
}

function filter(collection, filterFunc, index = 0, filterArray = []) {
    var length = myLength(collection)
    if (index >= length) {
        return filterArray;
    }
    else {
        const result = filterFunc(collection[index], index, collection);
        var pushArrray = result ? myPush(filterArray, collection[index]) : filterArray;
        return filter(collection, filterFunc, ++index, pushArrray);
    }
}

function reduce(collection, reducerFunction, initialValue, index = 0, accumulator = null) {
    var length = myLength(collection);
    if (index == 0) {
        accumulator = initialValue === undefined ? 0 : initialValue;
    }
    if (index >= length) {
        return accumulator;
    }
    else {
        accumulator = reducerFunction(accumulator, collection[index], index, collection);
        return reduce(collection, reducerFunction, initialValue, ++index, accumulator);
    }
}

function max(collection, index = 0, result = null) {
    if (index == 0) {
        result = collection[index];
    }
    if (collection[index] == undefined) {
        return result;
    }
    else {
        var maximum = result > collection[index] ? result : collection[index];
        return max(collection, ++index, maximum);
    }
}

function min(collection, index = 0, result = 0) {
    if (index == 0) {
        result = collection[index];
    }
    if (collection[index] == undefined) {
        return result;
    }
    else {
        var minimum = result < collection[index] ? result : collection[index];
        return min(collection, ++index, minimum);
    }
}

function reverse(collection, index = 0, result = []) {
    var length = myLength(collection);
    if (index >= length) {
        return result;
    }
    else {
        var pushArrray = myPush(result, collection[length - index - 1])
        return reverse(collection, ++index, pushArrray);
    }
}

function last(collection) {
    let length = myLength(collection);
    if (length == 0) {
        return null;
    } else {
        return collection[length - 1];
    }
}

function init(collection) {
    var length = myLength(collection);
    return take(collection, length - 2);
}

function take(collection, takeCount, index = 0, result = []) {

    if (index > takeCount) {
        return result;
    }
    else {
        var pushedArray = myPush(result, collection[index]);
        return take(collection, takeCount, ++index, pushedArray)
    }
}

function drop(collection, index, result = []) {
    var length = myLength(collection);
    if (index >= length) {
        return result;
    }
    else {
        var pushedArray = myPush(result, collection[index]);
        return drop(collection, ++index, pushedArray);
    }
}

function contains(collection, element, index = 0) {

    if (collection[index] == undefined) {
        return false;
    }
    else if (collection[index] === element) {
        return true;
    }
    else {
        return contains(collection, element, ++index);
    }
}

function range(start, end, offset = 1, result = []) {
    if (start < end) {
        var pushArrray = myPush(result, start);
        return range(start + offset, end, offset, pushArrray);
    }
    else {
        return result;
    }
}

function sum(collection) {
    return collection.reduce((x, y) => x + y, 0);
}

function sumOfSquares(collection) {
    return collection.map(element => element ** 2).reduce((x, y) => x + y, 0);
}


function cycle(collection, step = 1, start = 0, end = Infinity) {
    let nextIndex = start;
    let iterationCount = 0;
    let length = myLength(collection);

    const rangeIterator = {
        next: function () {
            let result;
            if (nextIndex < end) {
                var index = nextIndex % length;
                result = { value: collection[index], done: false }
                nextIndex += step;
                iterationCount++;
                return result.value;
            }
        }
    };
    return rangeIterator;
}


