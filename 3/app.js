function areaAndVolumeOfCuboid(l, b, h){
    let area = (2*(l*b+b*h+h*l))    // TSA=2(lb+bh+hl)
    let volume = (l*b*h)          //Volume= l × b × h
    return "Area="+area+ ", Volume=" +volume;
}

document.write(area(2, 3, 4));


      