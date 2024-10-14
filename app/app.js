var userName = "Example Reader";

function initListeners() {
  $("#contact").on("click", (e) => {
    openModal(`contact <span>US</span>`);
  });

  $("#open").on("click", (e) => {
    openModal(`thank you  <span> ${userName}  </span> fo3r signing up!!`);
  });

  $(".close-modal").on("click", (e) => {
    console.log("click modal");
    $(".modal").css("display", "none");
  });

  //   $(".close-btn").on("click", (e) => {
  //     console.log("x button");
  //   });

  //   $(".close").on("click", (e) => {
  //     console.log("close button");
  //   });
}

function openModal(feedbackText) {
  $(".feedback").html(feedbackText);
  $(".modal").css("display", "flex");
}

$(window).on("load", function () {
  console.log("loaded");
  // $(".modal").css("display", "none");
});

$(document).ready(function () {
  initListeners();
});
