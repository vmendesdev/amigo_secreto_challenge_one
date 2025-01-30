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

//Implementa uma função para atualizar lista de amigos
function atualizarLista() {
    let listaAmigosElement = document.getElementById('listaAmigos'); // Usando let para listaAmigosElement
    listaAmigosElement.innerHTML = '';
    
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement('li'); // Usando let para li
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}