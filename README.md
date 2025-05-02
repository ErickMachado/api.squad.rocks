<div align="center">
  <img src=".github/assets/Logo@120x120.svg" width="80" />
  <h1>squad.rocks API</h1>
</div>
<div align="center">
  <p>Gerencie projetos de software de forma simples e transparente</p>
  <img src="https://img.shields.io/github/license/ErickMachado/api.squad.rocks?style=for-the-badge&labelColor=11111B&color=CBA6F7" />
  <img src="https://img.shields.io/github/last-commit/ErickMachado/api.squad.rocks/main?style=for-the-badge&labelColor=11111B&color=CBA6F7" />
  <br />
  <br />
</div>

## 🚩 Introdução

**squad.rocks** é uma aplicação para o gerenciamento de projetos de software. Suas funcionalidades são inspiradas em como ferramentas como [Linear](https://linear.app/), [Jira](https://www.atlassian.com/br/software/jira) e [Trello](https://trello.com/pt-BR) funcionam.

A ideia por trás do projeto é ter uma aplicação _full-stack_ que sirva como laboratório para o aprendizado de técnicas de construção de software como: arquitetura limpa, comunicação assíncrona, provisionamento por meio de IaC, CI/CD, etc.

## 🧑‍💻 Ambiente local

### Ferramentas

- [Node.js](https://nodejs.org/) (recomendo instalar usando o [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating));
- [Docker](https://docs.docker.com/);
- [Terraform](https://developer.hashicorp.com/terraform/install);
- [Google Cloud CLI](https://cloud.google.com/sdk/docs/install);

### Contas necessárias

- [Google Cloud Platform](https://cloud.google.com/?hl=en);
- [Resend](https://resend.com/);

### Executando a API localmente

1. Baixe a versão do Node.js para o projeto com o comando:

```sh
$ nvm install
```

2. Faça login no `gcloud` com o comando:

```sh
$ npm run cloud:login
```

3. Execute o banco de dados e demais serviços com o comando:

```sh
$ npm run compose:up
```

4. Instale as dependências com o comando:

```sh
$ npm install
```

5. Crie a estrutura do banco de dados com o comando:

```sh
$ npm run migration:apply
```

6. Copie o arquivo `.env.template` e renomeie para `.env`. Nesse passo você vai precisar preencher algumas das variáveis com as chaves de acesso da sua conta. Veja a seção Contas necessárias;

7. Finalmente, execute a API com o comando:

```sh
$ npm run start:dev
```

8. Utilize um cliente HTTP e faça uma requisição para `GET /status`. Se tudo der certo, você vai receber as informações de saúde da aplicação.

## 📝 Licença

Licenciado sob a [licença MIT](LICENSE).
