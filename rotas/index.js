import express, { response } from "express";
const app = express();

app.all("/testeall", (req, res) => {
  res.send(req.method);
});

/*A última letra pode ser suprimida */
app.get("/teste?", (req, res) => {
  res.send("/teste?");
});

/*A última letra pode se repetir */
app.get("/teste+", (req, res) => {
  res.send("/teste+");
});

/*o conteúdo onde está o asterisco pode ser qualquer coisa */
app.get("/one*blue", (req, res) => {
  res.send(req.path);
});

app.post("/test(ing)?", (req, resp) => {
  res.send(req.path);
});

app.listen(3000, () => {
  console.log("Server Started!");
});
