# Teste Prático 0001

##Pré requisitos recomendado Visual Studio ou VSCode
1) Instalar NodeJS e .net Net Core
2) npm install -g create-react-app && npm install create-react-app
3) npm install react@^16.0.0 react-dom@^16.0.0
4) cd /web npm install
5) npm start


##Atividades

Siga o todas as atividades abaixo.

1) Faça um FORK do Projeto https://github.com/devbussoladoinvestidor/0001, este passo é importante para nosso analisador de código rastrear o repositório copiado.

2) Para começar a contar o tempo de teste, faça o primeiro commit alterando o arquivo de config das aplicações adicionando um parâmetro chamado autor e seu nome.

3) No projeto de Backend API é necessário criar uma controller para cadastro de clientes, é necessário ter um método para Cadastro, Alteração, Listagem(com Filtro) e Exclusão seguindo boas práticas REST. 

4) Implementar o Projeto de frontend com as classes necessárias e as telas para atender as funções do backend.

5) Regra de Negócio: Ao cadastrar o cliente, primeiro pede-se o e-mail e o restante dos campos deve ser preenchido usando API de DADOS seguinte: https://jsonplaceholder.typicode.com/users, todos os dados retornados devem ser salvos no banco de dados seguindo a estrutura de dados do serviço.

6) A integração com  https://jsonplaceholder.typicode.com/users pode ser feita no Backend se seu perfil for mais Backender ou pode ser feita no Frontend se for o seu perfil. Lembre-se apenas que neste caso teremos mais um método na controller de Clientes.

7) É necessário exibir para o operador do sistema todos os dados retornados pela API de DADOS, ao salvar enviar dados para API backend.

8) Na camada de dados é necessário adicionar as entidades de domínio, as tabelas serão criadas a partir do Webcontext usando EF codefirst já configurado na solução. Permitir apenas E-mail válido.

9) Na tela de consulta deverá ter um datagrid e deve ser possível fazer um filtro por e-mail via GET no Backend.

10) Implementar as operações de Alteração e Exclusão. Fique a vontade para fazer pequenos melhorias que achar interessante.

11) Ao terminar o teste enviar por e-mail para talentos@bussoladoinvestidor.com com URL do Github, e fazer um commit com o comentário; "Concluído".

#Boa sorte!
