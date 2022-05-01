# MBA-FULL-STACK - NodeJsM0

Projeto Criado para Acompanhamento do MBA Full Stack IGTI

## RERERÊNCIAS

[MSDN Web Docs](https://developer.mozilla.org)
[Especificação do W3C](https://www.w3.org/html/)
[ECMAScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## INSTALAÇÕES

1.  [NodeJs](https://nodejs.org/en/) - Ambiente de desenvolvimento JS

```
Comandos:

node -v | Verificar versão

```

2.  [LiveServer](https://www.npmjs.com/package/live-server) - Servidor Web de Arquivos Estáticos

```
Comandos:

npm install -g live-server | Instalar
live-server -v | Verificar Versão
live-server | Servir Arquivos em porta padrão 8080
live-server public --port=8081 | Servir Arquivos em Porta especificada

```

3.  [VSCode](http://code.visualstudio.com) - IDE de Desenvolvimento

```
**Extensões:**

* Degugger for Chrome
* Prettier - Code formatter

```

4. [json-server](https://www.npmjs.com/package/json-server) - Back-End API

```
Comandos:

npm install - Instalar Json-Server (Executar dentro do diretório BackEnd)
npm start - Iniciar Json-Server (Executar dentro do diretório Backend)


```

## AJUDA

1. [Windows](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-executionpolicy?view=powershell-7.2)
   Caso se depare com erro: Execução de Scripts Desabilitada

**Utilize:**

Get-ExecutionPolicy | Visualizar qual politica de execução atual
Set-ExecutionPolicy | Setar uma nova Politica de execução de Script

**Ex: Set-ExecutionPolicy RemoteSigned**

Podem ser:

**Restricted** : Não carrega nem executa arquivos de configuração e/ou scripts do Powershell.

**AllSigned** : Só executa scripts e arquivos de configuração assinados por um fornecedor confiável, mesmo que o script tenha sido escrito por você mesmo (local).

**RemoteSigned** : É basicamente o mesmo que o acima, porém permite a execução de arquivos de configuração e/ou scripts locais.

**Unrestricted** : Carrega e executa todos os arquivos de configuração e scripts PowerShell. Pode ser pedida uma confirmação para executar scripts não assinados.

**Bypass** : Não há nenhuma restrição.

**Undefined** : Remove a política de execução atual. A não ser que ela esteja definida numa diretiva de grupo.
