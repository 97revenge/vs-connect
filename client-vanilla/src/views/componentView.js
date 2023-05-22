function componentView() {
  const styleElement = () => {
    const result = document.createElement("style");

    return result;
  };

  const style = styleElement();

  document.body.appendChild(style, { extends: "style" });
}
