function number_factorial(x)
{
    let fact = 1;
    for (i = 1; i <= x; i++) {
        fact *= i;
    }
    console.log(fact);
}
number_factorial(3);