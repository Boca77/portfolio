const nav = document.getElementsByClassName("nav-li");

Array.from(nav).forEach((li) => {
  li.addEventListener("mouseover", () => {
    if (!li.classList.contains("active")) {
      li.classList.add("active");
    }
  });

  li.addEventListener("mouseout", () => {
    if (!li.classList.contains("clicked")) {
      li.classList.remove("active");
    }
  });

  li.addEventListener("click", (event) => {
    const clickedLi = event.currentTarget;
    const clickedId = clickedLi.id;

    for (const li of document.querySelectorAll("li.active")) {
      li.classList.remove("active");
      li.classList.remove("clicked");
    }

    clickedLi.classList.add("active");
    clickedLi.classList.add("clicked");

    for (const section of document.querySelectorAll("section.active-section")) {
      section.classList.remove("active-section");
    }

    const currentSection = document.querySelector(`section#${clickedId}`);
    if (currentSection) {
      currentSection.classList.add("active-section");
    } else {
      console.error(`Section with ID '${clickedId}' not found.`);
    }
  });
});
