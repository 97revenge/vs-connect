(function componentView() {
  const headerElement = {
    header: () => {
      const header = document.createElement("header");
      header.setAttribute("namespace", "headerElement");
      header.setAttribute("style", "background-color:#060821 ");
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
    LinkSlogan: () => {
      const p = document.createElement("p");
      const banner = document.querySelectorAll("div").item(1);
      p.classList.add("banner_slogan_1");
      p.innerText = `VS CONNECT 🚀`;
      banner.appendChild(p);
    },
    description: () => {
      const p = document.createElement("p");
      const banner = document.querySelectorAll("div").item(1);
      p.classList.add("banner_slogan_2");
      p.innerHTML = `Conectando os melhores
                           desenvolvedores independentes às mais diversas
                           oportunidades.`;
      banner.appendChild(p);
    },
    span: () => {
      const span = document.createElement("span");
      span.classList.add("banner_slogan_3");
      span.innerHTML = `Conecte-se e comece a desvendar
                                 esse mundo!`;
      const banner = document.querySelectorAll("div").item(1);
      banner.appendChild(span);
    },
    bannerButtons: () => {
      const bannerContent = document.querySelectorAll("div").item(1);
      const div = document.createElement("div");
      div.classList.add("banner_botoes");
      bannerContent.appendChild(div);
    },
    bannerLink: () => {
      const link = document.createElement("button");
      const bannerContent = document.querySelectorAll("div").item(2);

      const linkDev = link.cloneNode(true);
      console.log(linkDev);
      linkDev.innerHTML = `Desenvolvedor`;
      linkDev.setAttribute("class", "botao banner_botao_dev");
      bannerContent.appendChild(linkDev);

      const linkClient = link.cloneNode(true);
      console.log(linkClient);
      linkClient.innerHTML = `Cliente`;
      linkClient.setAttribute("class", "botao banner_botao_cliente");
      bannerContent.appendChild(linkClient);
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
      LinkSlogan: mainElement.LinkSlogan(),
      description: mainElement.description(),
      span: mainElement.span(),
      bannerButtons: mainElement.bannerButtons(),
      bannerLink: mainElement.bannerLink(),
    },
  };

  return structure;
})();
