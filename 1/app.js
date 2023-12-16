function volumeOFSphare(r){
    let volume = (4/3)*(22/7)*(r*r*r);   // (4/3)*π*(r*r*r)
    return volume
}

document.write(volumeOFSphare(2))