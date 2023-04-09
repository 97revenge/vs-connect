const express = require("express");
const app = express();
const port = 3001;
const api = require("./data/uiAPI.json");

app.get("/", (req, res) => {
  res.send("up");
});

app
  .route("/api")
  .get((req, res) => {
    res.json(api);
  })
  .post((req, res) => {
    const postValues = { ...req.body };
    api = [...api, ...postValues];
    res.json(postValues);
  })
  .put((req, res) => {
    let putValues;
    api = api.map((obj) => {
      if (obj === req.body) {
        putValues = { ...obj, ...req.body };
        return putValues;
      }
      return obj;
    });
    res.json(putValues);
  })
  .delete((req, res) => {
    const deleteValues = api.find((obj) => obj === +req.body);
    api = api.filter((obj) => obj !== +req.body);
    res.json(deleteValues);
  });

app.listen(port, () => {
  console.log("running");
});
