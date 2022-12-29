let vize1 = Number(prompt("vize 1 notunu giriniz"));
let vize2 = Number(prompt("vize 2 notunu giriniz"));
let final = Number(prompt("final notunu giriniz"));

let ort = ((vize1*0.3) + (vize2*0.3) + (final*0.4)); //!ondalık sayılarda vir gül kullanma-----NOKTA kullan


if (ort>=50) {
    console.log(ort + "olduğu için geçtiniz");
    
}

else{
    console.log(ort + ", 50den küçük olduğu için kaldınız");
}