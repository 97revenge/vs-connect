function hoverButton() {
  const button = document.querySelectorAll("button").item(0);
  button.addEventListener("mouseenter", () => {
    button.setAttribute("style", "border: 4px solid #c12d6d;");
  });
  button.addEventListener("mouseleave", () => {
    button.setAttribute("style", "");
  });
}

hoverButton();
