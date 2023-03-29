const fs = require("readline")
const inputFile = fs.createInterface({
    input:process.stdin,
    output:process.stdout
})
inputFile.question("Please enter your name:", (inputName)=>{
console.log("hello"+" "+inputName)
inputFile.close()
}  
)