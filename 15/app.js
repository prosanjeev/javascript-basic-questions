function volumeofArea(r){
    let v = (4/3)*(22/7)*(r*r*r);   // (4/3)*π*(r*r*r)
    let a = 4*Math.PI*Math.pow(r,2)
    return 'Volume= ' +v.toFixed(2) +", Area= " + a.toFixed(2)
}

document.write(volumeofArea(7))