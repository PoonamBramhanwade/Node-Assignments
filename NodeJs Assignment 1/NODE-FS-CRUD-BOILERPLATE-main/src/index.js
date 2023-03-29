const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(error)=>{
		if(error){
			console.log(error);
		}
		else{
			console.log("successfull")
		}
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, "utf-8", (error, data) => {
		if(data) {
		  console.log(data);
		}else{
		  console.log(error)
		}
	  });
	
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent, (error) => {
		if(error){
			console.log(error);
		}
		else{
			console.log("successfull")
		}
	  });
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(error)=>{
		if(error){
			console.log(error);
		}
		else{
			console.log("successfull deleted")
		}
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }