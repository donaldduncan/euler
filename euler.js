window.onload = function () {

    // This sets which problems are run
    var problems = [1,2,3,4,5,6,7,8];
    // This sets whether console logging is on
    var logging = false;

    for (let i = 0, len = problems.length; i < len; i++) {
        var results = logging ? window["problem" + problems[i]](true) : window["problem" + problems[i]]();
        var txt = document.getElementById("script");
        txt.innerHTML = txt.innerHTML + ("<span>Problem " + problems[i] + ": </span>" + results + "</br>");
        console.log("Problem " + problems[i] + ": " + results);
    }
}

function problem8(log) {
    // The four adjacent digits in the 1000-digit number that have the greatest product are
    // 9 × 9 × 8 × 9 = 5832.
    // Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
    // What is the value of this product?

    let num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    let digits = 13;
    let maxProduct = 0;
    for (let startIndex = 0; startIndex < num.length - digits; startIndex++) {
        let product = 1;
        for (let subIndex = 0; subIndex < digits; subIndex++) {
            if (log) {console.log('product = ' + product + '; Index =  ' + startIndex + "/" + subIndex + '; value = ' + num[startIndex + subIndex])}
            product = product * num[startIndex + subIndex];
        }
        if (product >= maxProduct) { maxProduct = product; }
    }
    return maxProduct;
}


function problem7(log) {
    // By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
    // What is the 10 001st prime number?

    let primes = []
    for (var i = 1; primes.length < 10002; i++) {
        if (isPrime(i)) {
            primes.push(i)
            if (log) { console.log(i + ' ' + primes.length) }
        };
    }
    return i;
}


function problem6(log) {
    // The sum of the squares of the first ten natural numbers is,
    //      12 + 22 + ... + 102 = 385
    // The square of the sum of the first ten natural numbers is,
    //      (1 + 2 + ... + 10)2 = 552 = 3025
    // Hence the difference between the sum of the squares of the first ten
    // natural numbers and the square of the sum is 3025 − 385 = 2640.
    // Find the difference between the sum of the squares of the first one hundred
    // natural numbers and the square of the sum.

    return squareOfSum(100) - sumOfSquares(100);
}

function problem5(log) {
    // 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
    // What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

    const largest = 2520; // Largest known evenly divisible number
    for (var i = largest; /* infinite */; i += largest) {
        for (var j = 19; j > 10; j--) {
            if (log) { console.log('loop: i' + i + ' / j' + j + '; divisor: ' + j) };
            if (i % j != 0) { break; }
            if (j === 11) { return i; }
        }
    }
}

function problem4(log) {
    // A palindromic number reads the same both ways. The largest palindrome made from the product
    // of two 2-digit numbers is 9009 = 91 × 99.
    // Find the largest palindrome made from the product of two 3-digit numbers.

    var largestPal = 0
    for (i = 999; i > 99; i--) {
        for (k = 999; k > 99; k--) {
            if (isPalindromic(i * k)) {
                if (log) { console.log("Pallindrome: " + i * k) };
                var Pal = i * k;
                break;
            }
            if (Pal > largestPal) { largestPal = Pal; /* console.log("i: " + i + ", k: " + k + ", i * k: " + i * k);  */ }
        }
    }
    return largestPal;
}

function problem3(log) {
    // The prime factors of 13195 are 5, 7, 13 and 29.
    // What is the largest prime factor of the number 600851475143 ?

    var largestFactor = 0;
    const product = 600851475143;
    for (var i = 2; i * i < product; i++) {
        if (product % i === 0) {
            if (isPrime(i)) {
                largestFactor = i;
            }
        }
    }
    return largestFactor;
}

function problem2(log) {
    // Each new term in the Fibonacci sequence is generated by adding the previous two terms.
    // By starting with 1 and 2, the first 10 terms will be:
    // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    // By considering the terms in the Fibonacci sequence whose values do not exceed four
    // million, find the sum of the even-valued terms.

    let sum = 0;
    for (let first = 1, second = 1, third = 1;
        third <= 4000000;
        third = first + second) {
        first = second;
        second = third;
        if (log) { console.log(third + " | Sum = " + sum) };
        if (third % 2 == 0) { sum += third; }
    }
    return sum;
}

function problem1() {
    // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
    // 3, 5, 6 and 9. The sum of these multiples is 23.
    // Find the sum of all the multiples of 3 or 5 below 1000.

    let sum = 0;
    for (let i = 3; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}


// Helper functions

function sumOfSquares(no) {
    let sum = 0;
    for (let i = 1; i < no + 1; i++) {
        sum += (i * i);
    }
    return sum;
}

function squareOfSum(no) {
    let sum = 0;
    for (let i = 1; i < no + 1; i++) {
        sum += i;
    }
    return sum * sum;
}

function isPrime(number) {
    for (let j = 2; j < number; j++) {
        // console.log('checking prime')
        if (number % j === 0) {
            return false;
        }
    }
    return true;
}

function isPalindromic(number) {
    str = number.toString();
    checkChars = Math.floor(str.length / 2);
    for (let p = 0; p <= checkChars; p++) {
        if (str[p] !== str[str.length - 1 - p]) { return false; }
    }
    return true;
}
