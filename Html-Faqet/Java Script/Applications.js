
$('.emratApp').hide();
$('.Aplikacionet').hover(function () {
    var elementi = $(this).find('h3');
    elementi.slideDown(400);
})
$('.Aplikacionet').mouseleave(function () {
    var elementi = $(this).find('h3');
    elementi.slideUp(400);
})

// const emri = 'Albin';
// const mosha = 30;

// console.log('Une jam '+emri+' dhe jam '+mosha+' vjeq');
// // ose mund te shkruhet edhe ne kete menyre pra duke shenuar backticks

// console.log(`Une jam ${emri} dhe jam ${mosha} vjeq`);

// const emrat = 'Albin,Zejnullah,Arben';
// console.log(emrat.split(','));
// console.log(emrat.split(',').length);

// // menyra tjeter per formimin e array eshte

// const vargu = ['Albin','Naim',1,2,3];
// vargu[5]= 'Arben'; // shtuam vlere ne elementin e 5 te vargut
// // ndersa mund te shtojme edhe nepermjet metodes push ne fund te vargut
// vargu.push('Zejnullah');

// // ndersa ne fillim te vargut ose ne head mund te shtojme nepermjet metodes ushift()

// vargu.unshift('Fetahu');

// // ndersa me metoden pop() e largojme te fundit nga vargu pra
// vargu.pop();
// console.log(vargu);

// // ndersa qasja ne varg behet permes
// console.log(vargu[1]); //pra i jemi qasur elementiti te pare ne vargun tone qe eshte 0 based

// // literalet e vargut mund ti vendosim edhe ne kete menyre ne javascript

// const personi=  {
//     emri: 'Albin',
//     mbiemri: 'Hetemi',
    
// }

// alert(personi.emri);


// let fruits = prompt("Which fruit to buy","Apple");

// let bag ={
//     [fruits]: 5,
// };

// console.log(typeof personi.emri)

// let year;
// console.log(typeof year);

// console.clear();

//per ta ngritur nje numer ne fuqi perdorim ** pra marrim nje shembull me poshte

// const variable =2;

// console.log(variable ** 3);

// const Emri = "Albin";
// const mbiemri = "Hetemi";
// console.log(Emri +" "+ mbiemri);

// const peshaMarkut = 78;
// const gjatesiaMarkut = 1.69;
// const bmiMarkut = peshaMarkut / gjatesiaMarkut ** 2;

// const peshaJohnit = 95;
// const gjatesiaJohnit = 1.88;

// const bmiJohnit  = peshaJohnit/gjatesiaJohnit ** 2;

// console.log(bmiMarkut,bmiJohnit);

// if(bmiJohnit > bmiMarkut){
//     console.log(`John ka bmi me te madhe se sa Marku`);
// }else{
//     console.log(`Marku ka bmi me te madhe se sa John`);
// }

// const emri = "Albin";
// const vite = 22;

// const teDhenat = `Une jam ${emri} dhe jam ${vite} vjeq`
// console.log(teDhenat);

// // per te shenuar ne rresht te ri thjesht fillojme me backticks dhe kalojme direkt ne rresht te ir

// console.log(`Albin Hetemi
// eshte 22 vjeq
// dhe vjen nga Poduejva`)


// const viteteAlbinit = 14;

// if(viteteAlbinit >= 18){
//     console.log("Ju mund te hyni ne disko");
// }
// else{
//     const mosha = 18 - viteteAlbinit;
//     console.log(`Jeni i ri ende,
//     duhet te prisni edhe ${mosha} vite per te hyre ne disko`);
// }


// type conversion

// let numri = '23';

// // nese provojme ta mbledhim direkt do na e mbledh ne menyren e gabuar

// console.log(numri + 22);

// // per ta konvertuar perdorim metoden number dhe do na jap rezultatin e sakte

// console.log(Number(numri)+22);

// let emri = albin

// console.log(String(emri));


// pyet userin per nurmin e tij te preferuar


// const favoriteNumber = prompt("What is your favorite number");

// if (favoriteNumber > 12){
//     console.log(`Numri juaj i preferuar eshte ${favoriteNumber}`);
// }

// const age = 22;

// age >= 18 ? console.log(`Mosha juaj pra ${age} eshte me madhe se 18`) :
//  console.log(`Mosha juaj nuk eshte me e madhe se sa 18 vjet`)

// coding challenge 4

// let billValue = 275;
// let tipValue;
// billValue <= 300 & billValue > 50 ? tipValue = 15 /100 : tipValue = 20/100
// console.log(`Vlera juaj eshte ${billValue} tip eshte ${tipValue * 100}% dhe 
// vlera e pergjithshme eshte ${(tipValue * billValue)+ billValue}`)

// funksionet ne javaScript
// funksionet ne javascript mund te ruhen edhe ne variabla pra 

const funksioni1 = function(nowYear,name){
    const retirement = 2065 - nowYear;
    const personi =  (`Personit me emer ${name} i cili eshte lindur ne vitin 2000
    i kane mbetur edhe ${retirement} vite deri ne pensionim`);
    return personi;
}


// console.log(funksioni1(2022,'Albin'));


// const vargu1 = ['Albin','Hetemi',12,5];
// console.log(vargu1[0]);

// vargu1 [3] = 'Blend';
// console.log(vargu1);

// const years = [1990,1998,1999,2000];

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

// const age1=  calcAge(years[1]);
// const age2 = calcAge(years[years.length -1]);
// console.log(age1,age2);

//gjithashtu ne mund te krijojme array edhe nepermjet thirrejve se funksioneve

// Creating Objects
// objekti si properti mund te permbaje edhe metoda perbrenda tij pra ne kemi vendosur
// metoden te cilen e kemi perfunduar me heret gjate kursit
const albin ={
emri : 'Albin',
mbiemri: 'Hetemi',
mosha : 22,
birthYear : 2000,
vendbainimi: 'Gllamnik',
puna : 'Programer',
shoket : ['Avdyl','Naim','Avdi'],

calcAge: function (){
this.mosha = 2045 - this.birthYear;
return this.mosha;
},
hasDriverlicense : true,

pershkrimi: function(){
    return `${this.emri} ka ${this.mosha} vite dhe me profesion eshte
    ${this.puna} dhe ka nje shok me emrin ${this.shoket[1]}`
}
};

// per te arritur tek nje properti e objektit perdorim (.) ose [] 
// me poshte do shohim se si mund te marrim nje te dhene direkt me prompt

// const interesimi = prompt(`Shkruani se cka doni te dini per Albinin, per punen vendbaninimin
// ose moshen`)

// if(albin[interesimi]){
// console.log(albin[interesimi]);
// }
// else{
//     console.log(`Vlera e shkruar nuk eshte ende e definuar nga perdoruesi`);
// }

// // per te percaktuar nje vecori te re ne objekt mund ta bejme si me poshte

// albin.puna = 'Solaborate';
console.log(albin.pershkrimi());

// console.log(`Albin ka 3 shoke dhe ata jane ${albin.shoket[0]}, ${
// albin.shoket[1]} dhe ${albin.shoket[2]} dhe ka shume respekt per ta`)