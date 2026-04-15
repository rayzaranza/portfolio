document.addEventListener("astro:page-load", () => {
  const menu = document.querySelector("#menu-toggle")!;
  const closeButton = document.querySelector("#close-menu")!;
  const backdrop = document.querySelector(".backdrop")!;
  const rootClasses = document.documentElement.classList;

  function handleExpand() {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", `${!isExpanded}`);
    if (!isExpanded) {
      rootClasses.add("overlay");
    } else {
      rootClasses.remove("overlay");
    }
  }

  menu.addEventListener("click", handleExpand);
  closeButton.addEventListener("click", handleExpand);
  backdrop.addEventListener("click", handleExpand);
});
