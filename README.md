# Project Go-Live-Tech-Musics

Esse projeto é um site de álbum e música com um banco de dados próprio, onde você será capaz de visualizar, criar, atualizar e deletar (soft delete) músicas e álbuns.

## Como Usar

### Crie o arquivo .env

Existe um arquivo chamado .env.example na raiz do projeto, use ele para criar o seu proprio.

### Docker
(Sinta-se a vontade para mudar algumas config de docker-compose.yml)


Esse projeto utiliza Docker. Para rodá-lo, basta executar o seguinte comando na raiz do projeto:


```bash
docker-compose up --build
```

Aguarde o docker fazer todos os processos antes de abrir o frontend.
Caso seu frontend nao mostre a api tente resetar apenas o container do frontend.

### Estrutura do Projeto

- **Backend:** A pasta `backend` contém toda a lógica do servidor.
- **Frontend:** A pasta `frontend/my-app` contém a interface do usuário.

### Rotas da API

#### GET

- `http://localhost:3000/album` - Obtém todos os álbuns.
- `http://localhost:3000/music` - Obtém todas as músicas.
- `http://localhost:3000/album/:id` - Obtém um álbum específico pelo ID.
- `http://localhost:3000/music/:id` - Obtém uma música específica pelo ID.
- `http://localhost:3000/music/album/:id` - Obtém todas as músicas de um álbum específico.

#### POST

- `http://localhost:3000/album` - Cria um novo álbum.
- `http://localhost:3000/music` - Cria uma nova música.

#### PUT

- `http://localhost:3000/album/:id` - Atualiza um álbum específico pelo ID.
- `http://localhost:3000/music/:id` - Atualiza uma música específica pelo ID.

#### DELETE (soft delete)

- `http://localhost:3000/album/:id` - Deleta um álbum específico pelo ID.
- `http://localhost:3000/music/:id` - Deleta uma música específica pelo ID.

### Frontend

No lado do frontend, você pode visualizar todas essas rotas funcionando de forma fácil e intuitiva. A interface possui botões claramente rotulados para cada ação.

## Tecnologias Utilizadas

### Backend

- JavaScript
- TypeScript
- Docker
- MySQL
- Express
- Sequelize

### Frontend

- TypeScript
- Next.js
- React
- Tailwind CSS

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Se você encontrar bugs ou tiver sugestões de melhorias, por favor, abra um issue ou faça um pull request.

## Licença

Este projeto está sob a licença MIT.
