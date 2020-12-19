function mangkuk(number) {
    line='';
    //up
    for(let i=0;i<number;i++) {
    
        for(let j=0;j<=i;j++) {
    
            line+=' *'; //left
    
        }
        for(let j=i;j>1;j--) {
    
            line+=' *'; //right
    
        }
    
    
        return line;
    }
}

console.log(mangkuk(10));