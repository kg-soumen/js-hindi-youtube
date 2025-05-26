let  name = "papu"
let repocounnt  = 220
console.log(`your name is ${name} and your repocount is ${repocounnt}`) 

const game = new String('abhimunno')
// console.log(game[0])
// console.log(game.__proto__)

const Name = new String('codewithpapu')
console.log(Name.charAt(3))//3 no indexx ar character ta pabo

console.log(Name.indexOf('p'))//p character ta kotay present seii index ta dekhabe

console.log(Name.length)// 

console.log(Name.slice(-10, 6))//  "-" mne back theke count krbe r  plus mnne  samne theke count korbe 


// includes meethod 
// const browsertype = "mozilla"
// if(browsertype.includes("zilla")){// value por por same hole true hobe att na hole false part
//     console.log("yes this is found")
    
// }
// else{
//     console.log("no this is not found")
    
// }

// 

const browsertyp = "mozilla"
if(browsertyp.startsWith("o")){ 
    console.log("yes this is found")
    
}
else{
    console.log("no this is not found")
    
}
