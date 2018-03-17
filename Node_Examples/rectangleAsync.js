module.exports = (x,y,callback) => {
  if(x<=0 || y<=0){
    setTimeout(() =>
    callback(new Error("Rectangle dimensions should be greater than zero: l = "+ x + ", and b = "+ y), null),
    2000);
  }
  else{
    setTimeout(() =>
    callback(null, {
      perimeter: () => (2*(x+y)),
      //No need to send any parameters here as x and y are already passed as a parameter in the outer function
      //and will be available to the inner functions
      area: () => (x*y)
    }),
    2000);
  }
}
