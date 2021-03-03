# CRUD Produtos

 Sistema criado utilizando NodeJS, o banco de dados MySQL e o modulos do npm express e sequelize. Ele tem por finalidade ser um teste prático com o intuito de concorrer a uma vaga desenvolver backend jr em uma empresa. 
 
# Funcionamento
 A aplicação possui cinco possíveis rotas, ("/", "/insert", "/list", "/delete/:id", "/update/:id").

 A primeira rota ("/"), serve como teste para verificar se o servidor está rodando. Enquanto a segunda ("/insert") serve para inserir os dados no banco, informações essas passadar por um meio de um JSON enviado pelo frontend. A terceira rota ("/List"), envia todos os dados armazenados no banco de dados em ordem crescente pelo "id". Já quarta rota ("/delete/:id"), é necessário que cada produto da listagem possua um botão de deletar no frontend, assim, ao clicar neste botão será enviado para o backend o id do produto a ser deletado. Por fim, a ultima rota ("/update/:id"), para que o usuário altere algum produto do banco, o frontend deve enviar pro backend o id e as informações que deseja alterar do produto.
 
# Como usar
 Primeiramente é necessário fazer o download do NodeJS.

 Após isso baixe todo o projeto.

 É necessário a intregração a um frontend, esse contendo os campos para cadastro de um produto (titulo, descrição, preço e categoria).

 Crie um banco de dados com nome de Produto, após isso, caso necessário altere o arquivo db dentro da pasta models, substituindo o nome do user root e a senha, pelo usuário e senha de seu banco. Abra o cmd, vá até a pasta do projeto e execute o comando npm install express --save, npm install sequelize --save, npm install --save mysql2 e o comando node index.js, para colocar o servidor em funcionamento.
