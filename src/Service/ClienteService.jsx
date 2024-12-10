const usuarioservice = {
  cadastrarCliente: async (clienteData) => {
    try {
      const response = await fetch('api/usuarios', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteData),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar cliente');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error.message);
      throw error;
    }
  },
  

  autenticarCliente: async (loginData) => {
    try {
      const response = await fetch('api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas ou erro no servidor.");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao autenticar cliente:", error.message);
      throw error;
    }
  },
};

export default usuarioservice;
