# biblioteca-api

## baixe o repositorio através do comando $ git clone https://github.com/mauriliosfc/biblioteca-api.git

## Para rodar a api é necessário ter instalado em sua maquina o NODE.JS

## Execute o comando $ npm istall
## Execute o comando $ npm run start
### A API estará disponível na porta 3000

# Rotas da API

## GET
### http://localhost:3000/livros

## GET
### http://localhost:3000/livros/:id

## POST
### http://localhost:3000/livros
body {
	"edicao": "5",
	"autor": "Nicholas C. Zakas",
	"titulo": "JavaScript de Alto Desempenho"
}

## PUT 
### http://localhost:3000/livros/:id
body {
	"edicao": "5",
	"autor": "Nicholas C. Zakas",
	"titulo": "JavaScript de Alto Desempenho"
}

## DELETE
### http://localhost:3000/livros/:id
