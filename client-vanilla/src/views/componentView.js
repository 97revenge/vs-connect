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
        a.classList.add("banner_botao_dev");
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
      const main = document.querySelector("main");

      const sectionBanner = section.cloneNode(true);
      sectionBanner.classList.add("banner");

      const sectionClient = section.cloneNode(true);
      sectionClient.classList.add("clientes");

      const div = document.createElement("div");
      div.classList.add("paralax");

      const sectionDeveloper = section.cloneNode(true);
      sectionDeveloper.classList.add("desenvolvedores");

      const sectionService = section.cloneNode(true);
      sectionService.classList.add("servicos");

      main.appendChild(sectionBanner);
      main.appendChild(sectionClient);
      main.appendChild(div);
      main.appendChild(sectionDeveloper);
      main.appendChild(sectionService);
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
    clientConection: () => {
      const section = document.querySelectorAll("section").item(1);
      const div = document.createElement("div");
      div.classList.add("conexao");

      const p = document.createElement("p");
      p.innerHTML = `<strong>Desde 2015 unindo propósitos.<br> Uma nova forma de
      desenvolver.</strong>`;
      div.appendChild(p);
      section.appendChild(div);
    },
    clientContent: () => {
      const img = document.createElement("img");

      const section = document.querySelectorAll("section").item(1);

      const div = document.createElement("div");

      divClientContent = div.cloneNode(false);
      divClientContent.classList.add("cliente_conteudo");

      divClientText = div.cloneNode(false);
      divClientText.classList.add("cliente_texto");

      img.setAttribute("src", "../img/clientes.png");
      divClientContent.appendChild(img);

      const h2 = document.createElement("h2");
      h2.innerHTML = `Para Clientes 👦🏻👨🏻👵🏻 `;

      const ul = document.createElement("ul");

      const liNode = document.createElement("li");

      const shearch = liNode.cloneNode(true);
      shearch.innerHTML = `procurar por desenvolvedores 👀`;

      const register = liNode.cloneNode(true);
      register.innerHTML = `cadastrar servicos 📝`;

      divClientText.appendChild(h2);
      ul.appendChild(shearch);
      ul.appendChild(register);
      divClientText.appendChild(ul);
      divClientContent.appendChild(divClientText);
      section.appendChild(divClientContent);
    },
    clientButton: () => {
      const div = document.createElement("div");
      const clientText = document.querySelectorAll("div").item(5);
      clientText.appendChild(div);
      div.setAttribute("class", "botao clientes_botao");
      div.innerHTML = `<strong>✨ criar conta ✨</strong>`;

      console.log(clientText);
    },

    devSection: () => {
      const section = document.querySelectorAll("section").item(2);

      const div = document.querySelector("div").cloneNode(false);
      div.classList.remove("posicionamento_header");

      const divContent = div.cloneNode(false);
      divContent.classList.add("dev_conteudo");

      const divInstance = div.cloneNode(false);

      const h2 = document.createElement("h2");
      h2.innerHTML = `para desenvolvedores 👩🏻‍💻👨🏻‍💻`;

      const ul = document.createElement("ul");

      const li = document.querySelectorAll("li").item(0);

      const services = li.cloneNode(false);
      services.innerHTML = `Encontrar Servicos 🪓🔫`;

      const hardSkills = li.cloneNode(false);
      hardSkills.innerHTML = `Divulgar suas HardSkills 🔥👨🏻‍💻`;

      const a = document.createElement("a");
      a.classList.add("botao");
      a.innerHTML = `Criar conta `;

      const img = document.createElement("img");

      img.setAttribute("src", "../img/maos_dev.png");

      divInstance.appendChild(h2);
      ul.appendChild(hardSkills);
      ul.appendChild(services);
      divInstance.appendChild(ul);
      divInstance.appendChild(a);
      divContent.appendChild(img);
      divContent.appendChild(divInstance);
      section.appendChild(divContent);
    },

    serviceSection: () => {
      const section = document.querySelectorAll("section").item(3);
      const div = document.createElement("div");

      const divService = div.cloneNode(false);
      divService.classList.add("servicos_cards");

      const cardLeft = div.cloneNode(false);
      cardLeft.classList.add("card");

      const cardRight = div.cloneNode(false);
      cardRight.classList.add("card");

      const img = document.createElement("img");

      const leftPin = img.cloneNode(false);
      leftPin.setAttribute("src", "../img/alfinete.png");

      const rightPin = img.cloneNode(false);
      rightPin.setAttribute("src", "../img/alfinete.png");

      const span = document.createElement("span");

      const leftSpan = span.cloneNode(false);
      leftSpan.innerHTML = `<str>Aplicativo para PetShop</str>`;

      const rightSpan = span.cloneNode(false);
      rightSpan.innerHTML = `Site para Pizzaria`;

      const p = document.createElement("p");

      const leftP = p.cloneNode(false);
      leftP.innerHTML = `Possuo um Petshop e gostaria de um aplicativo para que meus clientes pudessem agendar serviços como: banho e tosa, taxi dog, hotelzinho e etc.`;

      const leftResult = span.cloneNode(false);
      leftResult.innerHTML = `Proposta Á Combinar`;

      const rightResult = span.cloneNode(false);
      rightResult.innerHTML = `Proposta Á Combinar`;

      const rightP = p.cloneNode(false);
      rightP.innerHTML = `	Preciso de um site para divulgar o sabores das pizzas, o endereço, os telefones de contato, nossas redes sociais.`;

      cardLeft.appendChild(leftSpan);
      cardLeft.appendChild(leftP);
      cardLeft.appendChild(leftPin);
      cardLeft.appendChild(leftResult);
      divService.appendChild(cardLeft);

      cardRight.appendChild(rightSpan);
      cardRight.appendChild(rightP);
      cardRight.appendChild(rightPin);
      cardRight.appendChild(rightResult);
      divService.appendChild(cardRight);
      section.appendChild(divService);
    },
  };

  const footerElement = {
    footer: () => {
      const footer = document.createElement("footer");
      document.body.appendChild(footer);
      footer.classList.add("footer");
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
      clientConection: mainElement.clientConection(),
      clientContent: mainElement.clientContent(),
      clientButton: mainElement.clientButton(),
      devSection: mainElement.devSection(),
      serviceSection: mainElement.serviceSection(),
    },
    footer: {
      footer: footerElement.footer(),
    },
  };

  return structure;
})();
