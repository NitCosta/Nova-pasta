const API_URL = 'https://crudcrud.com/api/f98cb5773f9941d797a91f280ba52410/clientes';  

const form = document.getElementById('clienteForm');
const lista = document.getElementById('listaClientes');


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nome || !email) return alert('Preencha todos os campos!');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    });

    if (!response.ok) throw new Error('Erro ao cadastrar cliente');

    form.reset();        
    buscarClientes();    
  } catch (err) {
    alert(err.message);
  }
});


async function buscarClientes() {
  lista.innerHTML = ''; 

  try {
    const response = await fetch(API_URL);
    const clientes = await response.json();

    if (clientes.length === 0) {
      lista.innerHTML = '<li>Nenhum cliente cadastrado.</li>';
    }

    clientes.forEach(cliente => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${cliente.nome}</strong> - ${cliente.email}
        <button onclick="excluirCliente('${cliente._id}')">Excluir</button>
      `;
      lista.appendChild(li);
    });
  } catch (err) {
    console.error('Erro ao buscar clientes:', err);
  }
}


async function excluirCliente(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Erro ao excluir cliente');
    buscarClientes(); 
  } catch (err) {
    alert(err.message);
  }
}


document.addEventListener('DOMContentLoaded', buscarClientes);

document.getElementById('buscarBtn').addEventListener('click', buscarClientes);