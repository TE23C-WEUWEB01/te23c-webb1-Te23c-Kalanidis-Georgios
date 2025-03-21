// var tal1 = parseInt(prompt("Skriv in ett heltal"));
// var tal1 = parseInt(prompt("Skriv in ett till heltal"));

// if(tal1>tal2){
//     document.writeln(`${tal1} är större än $(tal2)`);
//     document.writeln(`${tal2} är större än $(tal1)`);
// }

//En liten inloggning

// while (true) {
//     var namn = prompt("Ange ditt namn:");
//     var lösenord = prompt("Ange ditt lösenord");
//     if (lösenord == "12345") {
//         document.writeln(`DU $ {namn} är inloggad`);
//         break;
//     } else {
//         document.writeln(`DU $ {namn} har skrivit fel lösenord`);
//     } 
// }

// for (let index = 20; index < 31; index++) {
//     document.writeln(`tal: $(index) <br>`);
// }

// let val = confirm("Klicka OK för att fortsätta");
let val = true;
while (val) {
    val = confirm("Klicka OK för att fortsätta");
}