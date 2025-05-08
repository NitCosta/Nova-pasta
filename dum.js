document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const fields = ["nome", "cep", "rua", "bairro", "cidade", "estado"];

  
  fields.forEach(field => {
    const value = localStorage.getItem(field);
    if (value) document.getElementById(field).value = value;
  });

 
  document.getElementById("cep").addEventListener("blur", async () => {
    const cep = document.getElementById("cep").value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error("Erro na requisição");
        const data = await response.json();
        if (data.erro) throw new Error("CEP não encontrado");

        document.getElementById("rua").value = data.logradouro || "";
        document.getElementById("bairro").value = data.bairro || "";
        document.getElementById("cidade").value = data.localidade || "";
        document.getElementById("estado").value = data.uf || "";
      } catch (error) {
        alert("Erro ao buscar CEP: " + error.message);
      }
    }
  });

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fields.forEach(field => {
      const value = document.getElementById(field).value;
      localStorage.setItem(field, value);
    });
    alert("Dados salvos com sucesso!");
  });
});
