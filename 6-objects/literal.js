// 1 - Create an object literal
// named prime with the properties:
// - city
// - state
// - zip
// Assign the values based on Prime's
// address.
var prime = {
  city: "Bloomington",
  state: "Minnesota",
  zip: 55431
};
// 2 - Using dot notation, create a
// new property for prime. This property
// will be called address and will
// take the value of Prime's street
// address.
prime.streetAddress="9401 James Ave S";
console.log(prime);

// 3 - Using dot notation, create a
// new method for prime. This method
// will console log out the complete
// address of prime. Call the new
// property/method print.
prime.fullAddress= function(){console.log(this.streetAddress+" "+this.city+", "+ this.state + " " +this.zip);};
prime.fullAddress();
