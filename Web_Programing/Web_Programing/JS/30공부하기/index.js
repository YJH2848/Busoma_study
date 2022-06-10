//test
const Data = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const error = false;
			if(error){
				reject("error");
			}
			else{
				resolve("user data");
			}
		}, 3000);
	})
}
Data()
.catch((error) => console.log(error))
.then((success) => console.log(success));