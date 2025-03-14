//alert("Glädjens dag, det är Lördag");


// Be användaren mata in 2 tal och skriv summan
// var tal1 = prompt("Skriv ett tal");
// var tal2 = prompt("Skriv ett tal");
// var summa = parseInt(tall1String) + parseInt(tal2String);
// alert("Summan är " + summa)

// Be användaren mata sin ålder
// Och skriv ut ålder på studenten


// var ålder = prompt(" Skriv din ålder");
// var studentÅlder = parseInt(ålder) + 1;
// alert("Su är " + studentÅlder + " när du tat studenten");

// document.writeln("<h2> Du är " + studentÅlder +  " när du tar studenten</h2>");

//Spamcheck

// Fråga användaren vad slumpad "summa"

var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
var summa = slumptal1 + slumptal2
console.log(slumptal1, slumptal2);
var gissning = prompt(" Vad är summan av " + slumptal1 + " + " + slumptal2 + " ? ");
if (gissning == summa) {
    document.writeln("<h1> Good job</h1>");
} else {
    document.writeln("<h1> Sucker</h1>");
}
