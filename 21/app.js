function total (p,r,t) {
    let x = ((p/100)*r*t) // p=principal, r=rate, t=time
    let ta = p+x   // Total Amount = Principal+Intrest
    return "Total Amount ="+ ta
}

document.write(total(20000,5,12))