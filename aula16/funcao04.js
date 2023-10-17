function fatorial(n) {
    fat = 1
    for (pos = n ; pos > 1; pos--) {
        fat = fat * pos
    }
    return fat
}

console.log(fatorial(5))
