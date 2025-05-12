//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
	let form =document.getElementById("form1");
	form.addEventListener("submit",function(event){
		event.preventDefault();
		const age = Number(document.querySelector("#age").value)
		const name = document.querySelector("#name").value;
		console.log(`age:#${age},name:${name}`);
		if(age<=0 || !name.length){
			alert("Please enter valid details.");
			return;
		}
		let promise=new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if(age>18){
					resolve("Welcome, . You can vote.")
				}else{
					reject("Oh sorry . You aren't old enough.")
				} 
			},4000)
		})
		promise.then((res)=>{
			alert(res)
		}).catch((err)=>{
			alert(err)
		})
	})
})