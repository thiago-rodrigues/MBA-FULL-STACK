import express, { json } from "express";
import { promises as fs } from "fs";
const router = express.Router();

/*Adiciona Nova Conta */
router.post("/", async (req, res, next) => {
  try {
    let account = req.body;
    if (!account.name || account.balance == null) {
      throw new Error("Name e Balance são obrigatórios");
    }

    const dados = JSON.parse(await fs.readFile(global.fileName));

    /*dessa forma, qualquer estrutura do JSON está sendo inserido */
    //account = { id: dados.nextId++, ...account };

    account = {
      id: dados.nextId++,
      name: account.name,
      balance: account.balance,
    };

    dados.accounts.push(account);

    /*Parametro do stringfy para deixar formatado o json, porém deixa o arquivo maior */
    await fs.writeFile(global.fileName, JSON.stringify(dados, null, 2));

    res.send(account);
    logger.info(`POST /account - ${JSON.stringify(account)}`);
  } catch (err) {
    //res.status(400).send({ error: err.message });
    next(err);
  }
});

/*Retorna todas as contas */
router.get("/", async (req, res, next) => {
  try {
    const dados = JSON.parse(await fs.readFile(global.fileName));
    delete dados.nextId;
    res.send(dados);
    logger.info("GET /account");
  } catch (err) {
    //res.status(400).send({ error: err.message });
    next(err);
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
    logger.info("GET /account/:id");
  } catch (err) {
    //res.status(400).send({ error: err.message });
    next(err);
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
    logger.info(`DELETE /account/:id - ${req.params.id}`);
  } catch (err) {
    //res.status(400).send({ error: err.message });
    next(err);
  }
});

/*Atualiza dados Totais */
router.put("/", async (req, res, next) => {
  try {
    let account = req.body;
    if (!account.name || account.balance == null) {
      throw new Error("Name e Balance são obrigatórios");
    }

    const dados = JSON.parse(await fs.readFile(global.fileName));
    const index = dados.accounts.findIndex((a) => a.id === account.id);

    if (index === -1) {
      throw new Error("Registro não encontrado!");
    }
    /*dessa forma não está validando os campos */
    //dados.accounts[index] = account;
    dados.accounts[index].name = account.name;
    dados.accounts[index].balance = account.balance;

    await fs.writeFile(global.fileName, JSON.stringify(dados, null, 2));

    res.send(account);
    logger.info(`PUT /account - ${JSON.stringify(account)}`);
  } catch (err) {
    //res.status(400).send({ error: err.message });
    next(err);
  }
});

/*Atualiza dados parciais */
router.patch("/UpdateBalance", async (req, res, next) => {
  try {
    let account = req.body;
    if (!account.id || account.balance == null) {
      throw new Error("ID e Balance são obrigatórios");
    }

    const dados = JSON.parse(await fs.readFile(global.fileName));
    const index = dados.accounts.findIndex((a) => a.id === account.id);

    if (index === -1) {
      throw new Error("Registro não encontrado!");
    }

    dados.accounts[index].balance = account.balance;

    await fs.writeFile(global.fileName, JSON.stringify(dados, null, 2));

    res.send(dados.accounts[index]);
    logger.info(
      `PATCH /account/UpdateBalance - ${JSON.stringify(dados.accounts[index])}`
    );
  } catch (err) {
    //res.status(400).send({ error: err.message });
    next(err);
  }
});

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
