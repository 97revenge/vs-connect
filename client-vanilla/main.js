

document.querySelector('#app').innerHTML = `
  <div>
ok
  </div>
`



class WebHeader extends HTMLElement {
  constructor(){
    super(); 


    const div = document.createElement("div");
    div.classList.add("container"); 
   

    document.body.appendChild(div);

  }


}
customElements.define("web-header", WebHeader); 



function webHeader () {

  const div = document.createElement("div");
  div.classList.add("container"); 
  div.innerHTML = `Hello World`
  return document.body.appendChild(div)


  
} 

webHeader(); 