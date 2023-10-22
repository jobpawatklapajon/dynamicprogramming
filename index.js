const maximum = function (array, index) {
   if (index == array.length - 1) {
    return array[index];
   } 

   return max(array[index], maximum(array, index + 1));
}

const palindrom = function (string, first=0, last=string.length - 1) {
    if (first >= last) {
        return true;
    }

    return string[first] == string[last] && palindrom(string, first + 1, last - 1);
}

const sequence = function (array, index=0) {
    if (index == array.length - 1) {
        return true;
    }
    return (array[index] + 1 == array[index + 1]) && sequence(array, index + 1);
}

const sumInteger = function (number=0) {
    if (number / 10 == 0) return number;
    return Math.floor(number % 10) + sumInteger(number / 10);
}

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
} 



module.exports = { maximum, palindrom, sequence, sumInteger }
