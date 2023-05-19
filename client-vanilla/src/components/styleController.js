function styleController() {

    const body = document.body;
    body.setAttribute("id", "app"); 
    body.innerHTML =  `
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
        <div class="banner-conteudo">
            <p>VSConnect</p>
            <p>Conectando os melhores desenvolvedores independentes às mais diversas oportunidades.</p>
        </div>
    </section>
</main>
    
    
    
    ` 


}

styleController(); 