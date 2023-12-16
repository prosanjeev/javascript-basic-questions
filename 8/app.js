function AandC(r){
    let a = (Math.PI*(r*r) )  // area = π(r*r)
    let c = 2*Math.PI*r         //C=2πr
    return "Area="+a.toFixed(2)+ ", Circumference=" +c.toFixed(2)
}

document.write(AandC(3));

