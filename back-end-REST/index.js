const express = require("express");
const app = express();
const port = 3001;
const api = require("./data/uiAPI.json");

// const aboutTexts = {
//   Button: "Conecte-se ! ",
//   moreLink:
//     "https://www.figma.com/file/6khinzowdFkFD1ikyQNawW/VS-Connect-by-Matheus-Henrique?node-id=1-2&t=NzZOCXGkSUpsEfNK-0",
//   H1Content: {
//     firstText: ["Publique", "=", "Nescessidades"],
//     secondText: ["Encontre", "=", "Desenvolvedores"],
//     paragraphContent: [
//       "Se você tem uma idéia, uma empresa , um aplicativo, uma arte ou um negócio...",
//       "O seu lugar é aqui !",
//     ],
//   },
// };

app.get("/", (req, res) => {
  res.send("up");
});

app.route("/api").get((req, res) => {
  res.json(api);
});

app.listen(port, () => {
  console.log("running");
});
