const camisetas = [];

function cadastrarCamiseta(){
    const titulo = document.getElementById('txtCamiseta').value;
    const descricao = document.getElementById('txtDescricao').value;
    const preco = parseFloat(document.getElementById('txtPreco').value);
    
   camisetas.push([titulo,descricao,preco])
   
}
document.write(camisetas)