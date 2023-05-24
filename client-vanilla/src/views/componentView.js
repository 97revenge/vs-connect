(function componentView() {
  const headerElement = {
    header: () => {
      const header = document.createElement("header");
      header.setAttribute("namespace", "headerElement");
      document.body.appendChild(header);
    },

    headerbannerContent: () => {
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
      const main = document.querySelector("main");
      h1.innerHTML = "Pagina Inicial : VS Connect";
      main.appendChild(h1);
    },
    section: () => {
      const section = document.createElement("section");
      section.classList.add("banner");
      const main = document.querySelector("main");
      main.appendChild(section);
    },
    bannerContent: () => {
      const bannerContent = document.createElement("div");
      bannerContent.classList.add("banner_conteudo");
      const section = document.querySelector("section");
      section.appendChild(bannerContent);
    },
  };

  const structure = {
    header: {
      headerElement: headerElement.header(),
      divElement: headerElement.headerbannerContent(),
      logo: headerElement.logo(),
      nav: headerElement.nav(),
    },
    // 🆗
    main: {
      mainElement: mainElement.main(),
      title: mainElement.title(),
      section: mainElement.section(),
      bannerContent: mainElement.bannerContent(),
    },
  };

  return structure;
})();
