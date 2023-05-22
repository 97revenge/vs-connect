function componentView() {
  function elementCSS() {
    const style = document.createElement("style");
    document.body.appendChild(style);

    style.innerHTML = `
         * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     }
     
     :root {
         --azul: #060821;
         --rosa: #C12D6D;
         --branco: #FFFFFF;
     
         --font1: 'Righteous', cursive;
         --font2: 'Titillium Web', sans-serif;
     }
     
     header {
         background-color: var(--azul);
     }
     
     .posicionamento_header {
         width: 1400px;
         margin: 0 auto;
     
         display: flex;
         justify-content: space-between;
         align-items: center;
         height: 80px;
     }
     
     .posicionamento_header img {
         width: 250px;
     }
     
     header nav {
         width: 450px;
         display: flex;
         justify-content: space-between;
         font-family: var(--font1);
         font-size: 18px;
     }
     
     header a {
         color: var(--branco);
         text-transform: uppercase;
         text-decoration: none;
     }
     
     .btn_login {
         border: 3px solid var(--rosa);
         padding: 1px 25px;
         border-radius: 30%;
     }
     
     h1 {
         position: absolute;
         left: -999em;
         width: 1em;
         /* overflow: hidden; */
     }
     
     .banner {
         background-image: url(../img/banner-background.png);
         height: calc(100vh - 80px);
         color: var(--branco);
         font-family: var(--font2);
         display: flex;
         align-items: center;
     }
     
     .banner_conteudo {
         background: linear-gradient(114.61deg, rgba(255, 255, 255, 0.052) 1.08%, rgba(255, 255, 255, 0.117) 99.26%);
         border: 1px solid rgba(255, 255, 255, 0.8);
         box-shadow: 30px 30px 60px rgba(0, 0, 0, 0.5);
         backdrop-filter: blur(10px);
         /* Note: backdrop-filter has minimal browser support */
         border-radius: 100px;
         display: flex;
         flex-direction: column;
         text-align: center;
         padding: 50px;
         width: 50%;
         margin: 0 auto;
     }
     
     .banner_slogan_1{
         font-size: 60px;
         font-family: var(--font1);
     }
     
     .banner_slogan_2{
         font-size: 24px;
         margin: 50px;
     }
     
     .banner_slogan_3{
         font-size: 22px;
         text-decoration: underline;
     }
     
     .banner_botoes{
         display: flex;
         justify-content: space-between;
         width: 75%;
     }
     
     .botao{
         font-family: var(--font1);
         color: var(--branco);
         text-transform: uppercase;
         font-size: 18px;
         text-decoration: none;
         
     }
     
     .banner_botao_dev{
         background: rgba(255, 255, 255, 0.01);
         border: 4px solid var(--rosa);
         padding: 10px 30px;
     }
         
         
         
         `;
  }

  function elementHTML() {
    document.body.innerHTML = ` 
        <body>
            <header>
                <div class="posicionamento_header">
                    <img src="../img/logo.svg" alt="Logo do site VsConnect">
                    <nav>
                        <a href="#">home</a>
                        <a href="#">Serviços</a>
                        <a href="#">Cadastro</a>
                        <a class="btn_login" href="#">Login</a>
                    </nav>
                </div>
            </header>
            <main>
                <h1>Página Inicial VSConnect</h1>
                <section class="banner">
                    <div class="banner_conteudo">
                        <p class="banner_slogan_1">VSConnect</p>
                        <p class="banner_slogan_2">Conectando os melhores desenvolvedores independentes às mais diversas oportunidades.</p>
                        <p class="banner_slogan_3">Conecte-se e comece a desvendar esse mundo!</p>
                        <div class="banner_botoes">
                            <a class="botao banner_botao_dev" href="">desenvolvedor</a>
                            <a class="botao" href="">cliente</a>
                        </div>
                    </div>
                </section>
            </main>
        </body>
   `;
  }

  return { HTML: elementHTML(), CSS: elementCSS() };
}

componentView();
