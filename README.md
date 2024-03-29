# SEQUELIZE ORM

> Para rodar o projeto execute os comandos `npm install` na raiz do projeto e em seguida `npm start`

## Arquitetura de Pastas MVC

### Models, Views & Controllers.

Na pasta _models_ ficam os modelos, arquivos que tem como responsabilidade executar comandos/querys diretamente no banco de dados.

Na pasta _controllers_ ficam os controladores, arquivos que tem como responsabilidade acessar o modelo necessário de acordo com o request feito a API e enviar a informação para o _view_.

Por enquanto ainda não há nenhuma pasta _views_. Porém esta será responsável por enviar a informação ao usuário seja através de um json ou arquivo HTML.

### Migrations, Seeders & Routes

Migrations são comandos direto que realizamos há um banco de dados, como por exemplo criar ou remover uma tabela.

> para rodar as migrações é importante ter instalado o **sequelize-cli** e o **mysql**. Também é necessário que crie-se uma database especifica para o projeto através do comando `CREATE DATABASE escola_ingles;` no terminal do mysql e que seja atualizado a pasta config com suas credenciais do mysql.

No terminal execute:
`npx sequelize-cli db:migrate`

Seeders são dados mockados que utilizamos para preencher o banco de dados na fase de desenvolvimento.

No terminal execute:
`npx sequelize-cli db:seed:all`

Routes é onde organizamos nossas rotas da API.

### Config

O arquivo config tem a responsabilidade de dizer ao Sequelize que ambiente estamos utilizando `"desenvolvimento", "teste", "produção"`,
assim como informar os dados para conexão com o banco de dados de cada um desses ambientes.
