export var userSignedIn = false;

var cartCount = 0;
var cartItems = [];
var Books = [];

export function getBooks() {
  return books;
}
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
