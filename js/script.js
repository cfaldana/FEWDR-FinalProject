const illustrationsButton = document.querySelector(".modal-button");
illustrationsButton.addEventListener("click", function() {
  document
    .querySelector(".illustrations")
    .classList.toggle("illustrations-open");
});

document
  .getElementById("illustrations-close")
  .addEventListener("click", function() {
    console.log("close anonymous function was clicked");
    document
      .querySelector(".illustrations")
      .classList.remove("illustrations-open");
  });
