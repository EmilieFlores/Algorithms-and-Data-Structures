const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;

// n % x looks for any remainder when dividing by the given number. If it equals zero then there is no remainder and it is divisible by the number.