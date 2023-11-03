// Program for sum two numbers using callback function
// Create one function name  "operation" in this function 
// first two parameter is value  the third parameter is 
// a callback function. create another function named Sum 
// pass this function (callback")as an argument and then 
// calling it inside the parent function 
// i.e., operation. Here, we have taken the "sum" as the 
// callback function, we can create any function and pass 
// it as the callback in the operation function


    let operation=((n1,n2,sum)=>{
		return sum(n1,n2)
	})
	document.write(operation(2,10,sum));
	
	function sum(n1,n2){
		return n1+n2
	}