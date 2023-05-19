class StyleComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <style>
    .title {
        display:flex; 
        flex-direction:row; 
        font-size: 25px; 

    }
    
    </style>
    
    
    `;
  }
}

class TitleComponent extends HTMLTitleElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    
  }
}

customElements.define("style-element", StyleComponent);
