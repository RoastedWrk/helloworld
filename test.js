console.log("==Variable definition==")
let a = 10
let b = a + 5
const c = 3
let d = c + 2
 console.log(d + 3)
 const printHello = (name) => {
   return `Bitch! ${name}`
}

console.log(printHello("test"))
console.log("======IF Condition=======")
 
 const isMeAdult = (age) => {
  if (age < 17) {
      return `No, You're not`
  } else if (age > 30 ) {
      return `You're mature`
  } else {
      return `Yes, you are adult`
  }
 }

 console.log(isMeAdult(23))
 
 console.log("=======LOOPING========")
 
for(i=0;i<3;i++) {
    console.log("Hell")
}