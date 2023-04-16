# SDWebService

Equipe : Javier Christian & Lucas Chaves


### GET /users

Retorna a lista de usuários cadastrados.
Response

    Status: 200 OK
    Body:

    [
      {
        "id": 1,
        "name": "Fulano",
        "email": "fulano@teste.com",
        "password": "123456"
      },
      {
        "id": 2,
        "name": "Ciclano",
        "email": "ciclano@teste.com",
        "password": "654321"
      }
    ]

### POST /users

Cria um novo usuário com as informações fornecidas no corpo da requisição.

Request Body


    {
      "name": "Beltrano",
      "email": "beltrano@teste.com",
      "password": "abcdef"
    }

Response

    Status: 201 Created
    Body:

    {
      "id": 3,
      "name": "Beltrano",
      "email": "beltrano@teste.com",
      "password": "abcdef"
    }

### PUT /users/:id

Atualiza um usuário existente com as informações fornecidas no corpo da requisição.
Path Parameters

    id (required): ID do usuário a ser atualizado.

Request Body

    {
      "name": "Beltrano da Silva",
      "email": "beltrano.silva@teste.com",
      "password": "123456"
    }

Response

    Status: 200 OK
    Body:

    {
      "id": 3,
      "name": "Beltrano da Silva",
      "email": "beltrano.silva@teste.com",
      "password": "123456"
    }

### DELETE /users/:id

Remove um usuário existente.

Path Parameters

    id (required): ID do usuário a ser removido.

Response

    Status: 204 No Content

### PATCH /users/:id

Atualiza parcialmente um usuário existente com as informações fornecidas no corpo da requisição.

Path Parameters

    id (required): ID do usuário a ser atualizado.

Request Body

    {
      "name": "Beltrano",
      "email": "beltrano@teste.com"
    }

Response

    Status: 200 OK
    Body:

    {
      "id": 3,
      "name": "Beltrano",
      "email": "beltrano@teste.com",
      "password": "123456"
    }

### OPTIONS /users

Retorna as opções de métodos HTTP suportados para o endpoint /users.

Response

    Status: 200 OK
    Headers:
        Allow: GET, POST, PUT, PATCH, DELETE, OPTIONS

### HEAD /users

Retorna as informações básicas sobre a lista de usuários, sem o corpo da resposta.

Response

    Status: 200 OK
    Headers:
        X-Total-Count: número total de usuários cadastrados.
        
