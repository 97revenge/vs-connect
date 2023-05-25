# Vs-connect - Senai Layout 🚀

![Untitled-video-Made-with-Clipchamp-_3_](https://github.com/97revenge/vs-connect/assets/80254945/a7e1cdef-7e1c-4afb-8f8b-a4f6d50c1465)

### Uma Home-Page construida pela DOM usando namespaces 

####  ↪ Como funciona namespaces em javascript ? 
`namespaces` é uma forma de  organizar e agrupar elementos relacionados, como variáveis, funções e objetos, para evitar conflitos de nomes.
A ideia é criar um objeto como um "container" para todos os nossos elementos relacionados. Por exemplo, vamos supor que temos algumas variáveis e funções relacionadas ao trabalho com datas:

````
const bodyElement = {
  divElement: function(any) {
    // Implementação 
  },
  paragraphElement: function(str) {
    // Implementação 
  },
  spanElement: function(date) {
    // Implementação 
  }
};
````

Já que tudo foi representado pela DOM, eu nao tive de dar dados , apenas a chamada do código ja trazia o necessário, um exemplo : 

````
const result = {
 div: bodyElement.divElement(), 
 paragraph: bodyElement.paragraphElement(),
 span: bodyElement.spanElement() 
}
````

 > Não é dificil e para mim funcionou muito bem com codigo alterando a DOM . 

 #### ↪ Qual a melhor forma de trabalhar com namespaces  ? 
A melhor forma de trabalhar com namespaces em JavaScript depende muito do contexto do seu projeto. A abordagem mais comum é simular namespaces usando objetos. Outra opção é utilizar módulos e sistemas de gerenciamento de pacotes, que funciona muito melhor no back-end. Além disso, [padrões de design](https://google.github.io/styleguide/jsguide.html#formatting-block-indentation) podem ajudar !!!

 #### ➕ Pontos Positivos  
##### - Organização do código . 
##### - estrutura semelhante a DOM . 
##### - micro-componentes independentes dentro de um objeto . 
##### - Evitar conflitos de nomenclatura . 

 #### ➖ Pontos Positivos 
##### - Requer muito tempo e revisão de codigo . 
##### - Programacao imperativa . 
##### - Duplicação de código . 
 
Para um nivel mais intermediários, a simulação de namespaces com objetos e a utilização de padrões de design podem ser incrível para organizar e estruturar o código. e pensando em um codigo em longo prazo avançados, o encapsulamento de funções pode fazer o codigo ótimo para testes e refatoração .

## Rodando localmente

Clone o projeto diretamente da branch `senai-layout`

```bash
  git clone https://github.com/97revenge/vs-connect/ -b senai-layout
```

Entre no diretório do projeto

```bash
  cd vs-connect/client-vanilla
```

Instale as dependências (por motivo de produtividade estou usando [vite](https://vitejs.dev/guide/))

```bash
  npm install
```

dev

```bash
  npm run dev
```

acesso a url 
```bash
  http://localhost:[url]/ 
```
 

> use o comando `gitk` para melhor análise. 
