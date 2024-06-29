
// Esercizio 1
// Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console.

const number = 100 //number non riassegnabile
console.log(number)

// Esercizio 2
// Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.

let PI = 3.14 //NUMBER RIASSEGNABILE PERCHè LET
console.log(PI)

// Esercizio 2/B
// Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?

PI = 3.1416 //AVENDO USATO TYPE LET è POSSIBILE RIASSEGNARE IL VALORE ALLA VARIABILE
console.log(PI)

// Esercizio 2/C
// Dichiara una variabile chiamata radius e assegnale il valore 8.
// Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
// Stampa il valore della variabile circle in console.

const radius = 8 // number
let calcolo = radius * 2 * PI //moltiplicazione di 3 number
let circle = calcolo //ASSEGNAZIONE ALLA VARIABILE CIRCLE IL VALORE CALCOLO
console.log(circle) //stampa circle

// Esercizio 3
// Dichiara una variabile chiamata name e
// assegnale il valore “Carlo”.
// Successivamente, modifica il valore della variabile in “Marco”.
// Stampa il nuovo valore in console.

let name = "Carlo" //string
console.log(name)

name = "Marco" // riassegnazione di Carlo in Marco
console.log(name)

name = prompt("inserisci il tuo nome") //riassegnazione di marco in input utente
console.log(name)
