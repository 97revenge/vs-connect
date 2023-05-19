function styleModel() {
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
    }
    
    
    
    `
    
    
    
    }


    styleModel();
 