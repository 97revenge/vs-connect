(function componentView() {
  const buildStyle = {
    build: () => {
      const style = document.createElement("style");
      document.body.appendChild(style);
      style.setAttribute("namespace", "build");
      style.innerHTML = `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :build {
      --azul: #060821;
      --rosa: #C12D6D;
      --branco: #FFFFFF;
      --azulC: #0C7FAF;

      --font1: 'Righteous', cursive;
      --font2: 'Titillium Web', sans-serif;
  }  
      `;
    },
    header: () => {
      const style = document.querySelector("style");
      const header = style.innerHTML;
      const posicionamento_header =
        header +
        `
        .header {
          background-color: var(--azul);
      }
      .posicionamento_header {
        width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;`;
      style.innerHTML = posicionamento_header;
    },
    imgHeader: () => {
      const style = document.querySelector("style");
      const header = style.innerHTML;
      const headerImg =
        header +
        `
      .posicionamento_header img {
        width: 250px;
    }      
      `;
      style.innerHTML = headerImg;
    },
    navHeader: () => {
      const style = document.querySelector("style");
      const header = style.innerHTML;
      const navHeader =
        header +
        `
      .header nav {
        width: 450px;
        display: flex;
        justify-content: space-between;
        font-family: var(--font1);
        font-size: 18px;
    }
      `;
      style.innerHTML = navHeader;
    },
    link: () => {
      const style = document.querySelector("style");
      const header = style.innerHTML;
      const aHeader =
        header +
        `
      .header a {
        color: var(--branco);
        text-transform: uppercase;
        text-decoration: none;
    }       
      `;
      style.innerHTML = aHeader;
    },
  };

  const headerElement = {
    header: () => {
      const header = document.createElement("header");
      header.setAttribute("namespace", "headerElement");
      document.body.appendChild(header);
    },

    headerContainer: () => {
      const div = document.createElement("div");
      div.classList.add("posicionamento_header");

      const header = document.querySelector("header");
      header.appendChild(div);
    },

    logo: () => {
      const img = document.createElement("img");
      img.setAttribute("src", "../img/logo.svg");
      const div = document.querySelector("div");
      div.appendChild(img);
    },

    nav: () => {
      const routes = ["inicio", "servicos", "cadastro", "login"];

      const aLinked = routes.map((item) => {
        const a = document.createElement("a");
        a.setAttribute("href", `#${item}`);
        a.textContent = item;
        return a;
      });

      const nav = document.createElement("nav");

      const div = document.querySelector("div");

      div.appendChild(nav);

      aLinked.forEach((item) => nav.appendChild(item));
    },
  };
  const mainElement = {
    main: () => {
      const main = document.createElement("main");
      main.setAttribute("namespace", "mainElement");

      document.body.appendChild(main);
    },

    title: () => {
      const h1 = document.createElement("h1");
      h1.innerHTML = "Pagina Inicial : VS Connect";
      const main = document.querySelector("main");

      main.appendChild(h1);
    },
  };

  const structure = {
    build: {
      build: buildStyle.build(),
      header: buildStyle.header(),
      imgHeader: buildStyle.imgHeader(),
      navHeader: buildStyle.navHeader(),
      link: buildStyle.link(),
    },
    header: {
      headerElement: headerElement.header(),
      divElement: headerElement.headerContainer(),
      logo: headerElement.logo(),
      nav: headerElement.nav(),
    },
    main: {
      mainElement: mainElement.main(),
      title: mainElement.title(),
    },
  };

  return structure;
})();
