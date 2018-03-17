//var rect = require('./rectangle');
//
//function solveRectangle(l,b){
//	console.log("Solving for rectangle with l = "+ l +" and b = "+ b);
//
//	if(l <= 0 || b <= 0){
//		console.log("Rectangle dimensions should be greater than zero: l = "+ l + ", and b = "+ b);
//	}
//	else{
//		console.log("The area of the rectangle is: "+ rect.area(l,b));
//		console.log("The perimeter of the rectangle is: "+ rect.perimeter(l,b));
//	}
//}
//
//solveRectangle(2,5);
//solveRectangle(3,5);
//solveRectangle(0,5);
//solveRectangle(-3,5);


var rect = require('./rectangleAsync');

function solveRectangle(l,b){
	console.log("Solving for rectangle with l = "+ l +" and b = "+ b);
  rect(l,b, (err, rectangle) => {
		if(err){
			console.log("ERROR: "+err.message);
		}
		else{
			console.log("The area of the rectangle of dimensions l = "+ l +" and b = "+ b +" is: "+ rectangle.area());
			//Not sending in any parameters here as l and b are already passed as a parameter in the outer rect() function
			//and will be available to the inner functions
			console.log("The perimeter of the rectangle of dimensions l = "+ l +" and b = "+ b +" is: "+ rectangle.perimeter());
		}
	});
  console.log("This statement is after the call to rect().");
}

solveRectangle(2,5);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,5);
