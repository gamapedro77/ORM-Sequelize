# SEQUELIZE ORM

## Neste Readme vou tentar explicar o que tá acontecendo no projeto com o intuito de facilitar o meu aprendizado e minha navegação por ele

### Arquitetura de Pastas MVC

#### (M)odels, (V)iews & (C)ontrollers.

Na pasta _models_ ficam os modelos, arquivos que tem como responsabilidade executar comandos/querys diretamente no banco de dados.

Na pasta _controllers_ ficam os controladores, arquivos que tem como responsabilidade acessar o modelo necessário de acordo com o request feito a API e enviar a informação para o _view_.

Por enquanto ainda não há nenhuma pasta _views_. Porém esta será responsável por enviar a informação ao usuário seja através de um json ou arquivo HTML.

#### Migrations, Seeders & Routes

Migrations são linhas direto de comando que realizamos há um banco de dados, como por exemplo criar ou remover uma tabela.

Seeders são dados mockados que utilizamos para preencher o banco de dados na fase de desenvolvimento.

Routes é onde organizamos nossas rotas da API.

#### Config

O arquivo config tem a responsabilidade de dizer ao Sequelize que ambiente estamos utilizando `"desenvolvimento", "teste", "produção"`,
assim como informar os dados para conexão com o banco de dados de cada um desses ambientes.
