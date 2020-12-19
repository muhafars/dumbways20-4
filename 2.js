var nilai=[20,50,65,70,80,80,30,55,75];
nilai.forEach(myFunction);


function myFunction(cekNilai){
    if (cekNilai>=65){
console.log( `${cekNilai} = Lulus `); 
    }
    else if(cekNilai<60){
        console.log(`${cekNilai} = Tidak Lulus `)
    }

}
