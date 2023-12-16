
function totalarea (r,h) {
    let area = 2*(Math.PI)*r*(r+h);  //A=2πrh+2πr2
    return area.toFixed(2);
}

document.write(totalarea(3,4))