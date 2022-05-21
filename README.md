# NodeJsM1 : Módulo 1 - Desenvolvimento Back End com JavaScript

Projeto Criado para Acompanhamento do MBA Full Stack IGTI

## INSTALAÇÕES

1.  [NodeJs](https://nodejs.org/en/) - Ambiente de desenvolvimento JS

Comandos:

```
node -v | Verificar versão
npm init | Iniciar Node.js
npm init -y | Inicia respondendo sim para todos os itens de parametrização inicial
node "NomeArquivo.js" | Rodar arquivo Js
node "NomeArquivo.js" parametro1 | Pode iniciar o arquivo passando parametro que poderá ser acessado através do "process.argv[i]"
```

2. [NodeMon]() - Ferramenta que identifica modificações no projeto e executa refresh no servidor web

Commandos:

```
npm install nodemon | Instala NodeMon no projeto atual
npm install nodemon -g | Instala Nodemon de forma global
nodemon "NomeArquivo.js" | Rodar arquivo Js

```

3. [ExpressJs](https://expressjs.com/pt-br/) - Framework de desenvolvimento Web para Api

commandos:

```
npm install express | Instala ExpressJs no Projeto

```

Definindo Rota e subindo o servidor

```
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World GET!");
});

app.post("/", (req, res) => {
  res.send("Resultado: " + resultado);
});

app.listen(3000, () => {
  console.log("API Started!");
});

```

**Informações**

```
package.json | Arquivo de configuração do Node.js
Event Loop | Recurso do Node que controla a execução das atividades de forma assincrona
```

**Exportação e Importação de Módulos**

_CommonJs_

```
Default:
module.exports = {soma, subtracao}

const operacoes = require("./modulo.js")
operacoes.soma();

module.exports = multiplicacao
const abc = require("./modulo.js")
abc()


```

_ES6_

_Observação: Deve ser acrescentado a instrução abaixo no package.json para usar ES6_

"type" : "module"

```
Default:
exports default {soma, subtracao}

import op from ("./modulo.js");
op.soma();

exports default multiplicacao;

import multiplicacao from ("./modulo.js");
multiplicacao();


```

## Modulos Padrão

**fs** - Trabalhar com Arquivos

**ReadLine** - Trabalhar com Leitura do terminal

**EventEmitter** - Trabalhar com eventos

**http** - Trabalhar com requisições

4. [Winston](https://www.npmjs.com/package/winston) - Biblioteca de Logs

commandos:

```
npm install winston | Instala Winston no Projeto

```

## FERRAMENTAS A CONHECER

1. [Electron](https://www.electronjs.org/) - FrameWork de Desenvolvimento Desktop
2. [Restify](http://restify.com/) - FrameWork para Desenvolvimento de API Rest
3. [Joi](https://joi.dev/api/?v=17.6.0) - Lib para validação de campos em API
4. [Deno](https://deno.land/) - Framework Similar ao próprio Node
