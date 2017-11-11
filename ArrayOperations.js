function ArrayOperations() {
	
	// declare an arry of numbers
	var arr = [3,4,5,6,76,7,8];

	console.log("Initial array");
	DisplayArrayElements(arr);

	// push new numbers so that they will be added from the last
	arr.push(25,35,45,55);
	console.log("After pushing 4 elements");
	DisplayArrayElements(arr);

	// pop - will delete the numbers from last (55)
	arr.pop();
	console.log("After first pop operation");
	DisplayArrayElements(arr);

	// pop - will delete the numbers from last (45)
	arr.pop();
	console.log("After second pop operation");
	DisplayArrayElements(arr);

	console.log("Displaying first four elements");

	// displaying only first four elements
	for(index in arr)
	{
		if(index > 3)
			break;

		console.log(arr[index]);
	}
}

// function to display array elements in a single line
function DisplayArrayElements(number_array)
{
	var numbersList;	  	

	for(index in number_array)
	{
		if(index > 0)
			numbersList = numbersList + ", " + number_array[index]; // concatenate (,) from index 1
		else
			numbersList = number_array[0]; // for the 0 index skip don't concatenate (,)
	} 

	console.log("[" + numbersList + "]");
	console.log("Length: "+number_array.length);
}

// call the main function
ArrayOperations();