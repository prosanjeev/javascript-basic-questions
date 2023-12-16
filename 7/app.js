function AoT (a, b, c) {
    let s = (a + b + c)/2  //The semi-perimeter of triangle s = (a + b + c)/2
    let x = Math.sqrt(s* (s-a)* (s-b)*(s-c))
    return x
}

document.write(AoT(3,2,4))