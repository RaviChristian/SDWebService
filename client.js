// Função para fazer uma requisição POST
async function createUser(user) {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const data = await response.json();
      return(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Função para fazer uma requisição GET
  async function getUsers() {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      return(data)
    } catch (error) {
      console.error(error);
    }
  }
  
  // Função para fazer uma requisição PUT
  async function updateUser(id, user) {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const data = await response.json();
      return(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Função para fazer uma requisição PATCH
  async function partialUpdateUser(id, user) {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const data = await response.json();
      return(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Função para fazer uma requisição DELETE
  async function deleteUser(id) {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
      });
      return(response.status);
    } catch (error) {
      console.error(error);
    }
  }
  

async function testAPI() {
  try {
    const newUser = { 
        name: 'John Doe', 
        email: 'johndoe@example.com', 
        password: '123456' 
    };

    const createdUser = await createUser(newUser);
    
    const users = await getUsers();
    console.log('Usuários:', users);
    
    console.log('Usuário criado:', createdUser);
    
    const updatedUser = { name: 'John Doe Jr.' };
    const updatedUserInfo = await updateUser(createdUser.id, updatedUser);
    console.log('Usuário atualizado:', updatedUserInfo);
    
    const deletedUser = await deleteUser(createdUser.id);
    console.log('Usuário deletado:', deletedUser);
    
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

testAPI();
