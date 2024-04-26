function getPayment(princepalAmount, percentageRate, numberOfMonths){
 //P ((r(1+r)n) / ((1+r)n-1))
 r = percentageRate
 n = numberOfMonths
 P = princepalAmount
 output = P * ((r*(1+r) ** n) / ((1+r) ** n - 1))

    return 0;
}

result = getPayment(53000, 7.625 / 100, 15 * 12);
console.log(result);
result = getPayment(10000, 3.5 / 100, 60)
console.log(result)