$(".product span").on("click", function (e) {
  e.preventDefault();
  // jquarey method
  // var id = $(this).attr("id");
  var btnId = e.currentTarget.id;
  console.log(btnId);
  addItemToCart();
});
$(document).ready(function () {
  initListeners();
});
