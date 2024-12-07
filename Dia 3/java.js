let nomeDoUsuario = prompt("Digite seu nome inteiro")
let idadeDoUsuario = prompt("Digite sua idade")
let pesoDoUsuario = parseInit(prompt("Digite seu peso"))
let alturaDoUsuario = parseFloat(prompt("Digite sua altura"))
let anoDeNascimentodoUsuario = 2023 - idadeDoUsuario
let imc = parseInt(pesoDoUsuario  /  (alturaDoUsuario  *  alturaDoUsuario))
//+ - * %
// 1 + 3 = 4 --> SUM
// 1 + "3" = 13 --> CONCONATE
// "1" + "3" --> CONCONATE 
console.log("Olá " + nomeDoUsuario + ", você tem " + idadeDoUsuario + 
 " anos, nasceu em " + anoDeNascimentodoUsuario + ", tem " +
  alturaDoUsuario + " de altura, pesa " +
 pesoDoUsuario + "Kg e seu IMC é " + imc + "Kg/m2.")
