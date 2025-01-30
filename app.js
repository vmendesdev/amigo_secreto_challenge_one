let amigos = [];

//Implementa uma função para agregar amigos
function adicionarAmigo() {
    let amigo= document.getElementById('amigo').value.trim();
    
    if (amigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    
    listaDeAmigos.push(amigo);
    document.getElementById('amigo').value = '';
    atualizarLista();
}