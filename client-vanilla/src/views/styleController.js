function styleController() {
  const body = document.body;
  body.setAttribute("id", "app");
  body.innerHTML = `
    <!DOCTYPE html>
    <html lang="pt-br">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Inicial - VSConnect</title>
            <link rel="stylesheet" href="style.css">
    
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
                href="https://fonts.googleapis.com/css2?family=Righteous&family=Titillium+Web&display=swap"
                rel="stylesheet">
        </head>
    
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
    
    </html>
    
    `;
}

styleController();
