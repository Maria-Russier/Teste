let name = prompt("What is your name?")
let age = Number(prompt("How old are you?"))
let licence = prompt("Do you hold a driver's lincence? (yes/no)")
let car = prompt("Do you have a car? (yes/no)")

if(age < 18 || licence === "no" ){console.log(name + ", you can not drive.")

}else if(car === "no"){console.log(name + ", you can drive, but you don't have a car.")

}else{console.log(name + ", you are going to be the driver!")}