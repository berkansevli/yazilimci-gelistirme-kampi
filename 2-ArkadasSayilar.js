let total1 = 0
let total2 = 0

let arkadasSayilar = function (sayi1, sayi2) {
    for (let i = 0; i < sayi1; i++) {
        if(sayi1 % i == 0){
            total1 += i
        }
    }
    for (let i = 0; i < sayi2; i++) {
        if(sayi2 % i == 0){
            total2 += i
        }
    }
    //console.log(total1,total2)
    if(total1 == sayi2 && total2 == sayi1) {
        console.log("Bu sayilar arkadas sayilar!")
    }
    else{
        console.log("Bu sayilar arkadas degil!")
    }
}

arkadasSayilar(1184, 1210)