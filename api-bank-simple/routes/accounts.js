import express, { json } from "express";
import { promises as fs } from "fs";
const router = express.Router();

global.fileName = "accounts.json";

/*Adiciona Nova Conta */
router.post("/", async (req, res, next) => {
  try {
    let account = req.body;
    const dados = JSON.parse(await fs.readFile(global.fileName));

    account = { id: dados.nextId++, ...account };

    dados.accounts.push(account);

    /*Parametro do stringfy para deixar formatado o json, porém deixa o arquivo maior */
    await fs.writeFile(global.fileName, JSON.stringify(dados, null, 2));

    res.send(account);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/*Retorna todas as contas */
router.get("/", async (req, res, next) => {
  try {
    const dados = JSON.parse(await fs.readFile(global.fileName));
    delete dados.nextId;
    res.send(dados);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/*Retorna contas por ID */
router.get("/:id", async (req, res, next) => {
  try {
    const dados = JSON.parse(await fs.readFile(global.fileName));
    const account = dados.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );
    res.send(account);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/*Delete por ID */
router.delete("/:id", async (req, res, next) => {
  try {
    const dados = JSON.parse(await fs.readFile(global.fileName));
    dados.accounts = dados.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );
    await fs.writeFile(global.fileName, JSON.stringify(dados, null, 2));
    res.end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/*Atualiza dados Totais */
router.put("/", async (req, res, next) => {
  try {
    let account = req.body;
    const dados = JSON.parse(await fs.readFile(global.fileName));
    const index = dados.accounts.findIndex((a) => a.id === account.id);

    dados.accounts[index] = account;

    await fs.writeFile(global.fileName, JSON.stringify(dados));

    res.send(account);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

/*Atualiza dados parciais */
router.patch("/UpdateBalance", async (req, res, next) => {
  try {
    let account = req.body;
    const dados = JSON.parse(await fs.readFile(global.fileName));
    const index = dados.accounts.findIndex((a) => a.id === account.id);

    dados.accounts[index].balance = account.balance;

    await fs.writeFile(global.fileName, JSON.stringify(dados));

    res.send(dados.accounts[index]);
  } catch (error) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
