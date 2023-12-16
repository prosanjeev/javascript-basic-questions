function KtoM (k) {
    let m = k/1.609  //m=divide the length value by 1.609
    
    return m.toFixed(3)
}

document.write(KtoM(4))