import {
  userSignedIn,
  signIn,
  signOut,
  addItemToCart,
  getBooks,
} from "./../model/model.js";

function initListeners() {
  $(".links a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href").replace("#", "");
    console.log(url);
  });

  $(".signInOut a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href").replace("#", "");

    if (url === "signIn") {
      console.log(signIn());
    }
    if (url === "signOut") {
      console.log(signOut());
    }
    if (url === "cart") {
      if (userSignedIn) {
        alert("User is signed in. Redirect to cart page.");
      } else {
        alert("Please sign in first.");
      }
      //  console.log(signIn());
    }
  });

  $("#twiCart").on("click", function (e) {
    e.preventDefault();
    // jquarey method
    // var id = $(this).attr("id");
    var btnId = e.currentTarget.id;
    console.log(btnId);
    addItemToCart();
  });
}

function loadHomePageBooks() {
  let books = getBooks();
  let homeBookCount = 3;

  $.each(books, function (index, book) {
    console.log(index);
    if (book.featured) {
      $("#app").append(
        `<div id="twiCart">
                  <h3>${book.name}</h3>
                  <span id="p${book.id}">Add to cart</span>
                  <p>$${book.price}</p>
                  </div>`
      );
    }
  });
}

function loadBooks() {
  let books = getBooks();
  $.each(books, function (index, book) {
    $("#app").append(
      `<div id="twiCart">
                <h3>${book.name}</h3>
                <span id="p${book.id}">Add to cart</span>
                <p>$${book.price}</p>
                </div>`
    );
  });
}

$(document).ready(function () {
  loadBooks();
  loadHomePageBooks();
  initListeners();
});
