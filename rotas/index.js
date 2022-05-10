import express, { response } from "express";

const app = express();
app.use(express.json());

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

/*Parametros na rota e parametro opcional*/
app.get("/testparam/:id/:id2?", (req, res) => {
  res.send(req.params.id + " - " + req.params.id2);
});

/*Expressão regular */
app.get(/.*red$/, (req, res) => {
  res.send("/.*red$/");
});

app.post("/testbody", (req, resp) => {
  console.log(req.body);
  resp.send(req.path);
});

/*parametros via query */
app.get("/testQuery", (req, resp) => {
  resp.send(req.query);
});

/*next */
app.get(
  "/testmultiple",
  (req, resp, next) => {
    console.log("Callback 1");
    next();
  },
  (req, res) => {
    console.log("Callback 2");
    res.send("Fim!"); /*resposta para finalizar */
    res.end(); /* Ou end */
  }
);

/*Next com Array */
const callback1 = (req, resp, next) => {
  console.log("Callback 1");
  next();
};

function callback2(req, res, next) {
  console.log("Callback 2");
  next();
}

const callback3 = (req, resp) => {
  console.log("Callback 3");
  resp.end();
};

app.get("/testmultiplearray", [callback1, callback2, callback3]);

/*Start na porta definida */
app.listen(3000, () => {
  console.log("Server Started!");
});
