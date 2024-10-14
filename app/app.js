import {
  userSignedIn,
  signIn,
  signOut,
  addItemToCart,
  getBooks,
} from "../model/model.js";

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

let count = 0;

const addNum = document.getElementById("addNum");
const twiCart = document.getElementById("twiCart");

twiCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
hpCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
gotCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
findCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
mlkCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
eleCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
misCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
frankCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
phanCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
winCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
catCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
spaceCart.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
addtocartbtn1.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
addtocartbtn2.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
addtocartbtn3.addEventListener("click", () => {
  count += 1;
  addNum.textContent = count;
});
