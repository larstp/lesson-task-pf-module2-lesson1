//Q1

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
  console.log("Names are the same");
} else {
  console.log("Names do not match");
}

//Q2

var username = "fjompen";

let lengthOfUsername = username.length;

if (lengthOfUsername >= 4 && lengthOfUsername <= 10) {
  console.log("Acceptable username");
} else {
  if (lengthOfUsername < 4) {
    console.log("Username too short");
  }

  if (lengthOfUsername > 10) {
    console.log("Username is too long");
  }
}

//Q3

var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if (
  invoicePaid === true &&
  productDispatched === true &&
  customerHasSigned === true
) {
  console.log("Order complete");
} else {
  console.log("Order incomplete");
}

//Q4

var invoicePaidAgain = true;
var productDispatchedAgain = false;
var customerHasSignedAgain = true;

if (
  invoicePaidAgain === false ||
  productDispatchedAgain === false ||
  customerHasSignedAgain === false
) {
  console.log("Order incomplete");
} else {
  console.log("Order completed");
}
