export var userSignedIn = false;

var cartCount = 0;
var cartItems = [];

export function signIn() {
  userSignedIn = true;
  return userSignedIn;
}

export function signOut() {
  userSignedIn = false;
  return userSignedIn;
}

export function addItemToCart() {
  $(".signInOut .count").html(++cartCount);
}
