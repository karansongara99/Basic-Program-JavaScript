let Arr = [50, 60, 20, 10, 40]
console.log("Min Value")
Arr.sort((a, b) => a - b)
let minValue = Arr[0]
console.log("Max Value")
Arr.sort((a, b) => b - a)
let maxValue = Arr[0]
console.log('Minimum element is:' + minValue)
console.log('Maximum Element is:' + maxValue)
