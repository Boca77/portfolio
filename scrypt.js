const nav = document.getElementsByClassName("nav-li");

Array.from(nav).forEach((li) => {
  li.addEventListener("mouseover", function () {
    li.style.width = "150px";
    li.style.color = "white";

    li.addEventListener("mouseout", function () {
      li.style.width = "15px";
      li.style.color = "transparent";
    });

    li.addEventListener("click", function (event) {
      for (const li of document.querySelectorAll("li.active")) {
        li.classList.remove("active");
      }
      event.currentTarget.classList.add("active");
    });
  });
});
