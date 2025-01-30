let listaDeAmigos = [];

//Implementa uma função para agregar amigos
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === "") {
        alert('Por favor, insira um nome válido.');
        return;
    }
    listaDeAmigos.push(amigo);
    document.getElementById('amigo').value = "";
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




//Implementa uma função para sortear amigos
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome à lista.');
        return;
    }
        
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Usando let para indiceAleatorio
    let amigoSorteado = listaDeAmigos[indiceAleatorio]; // Usando let para amigoSorteado
        
    document.getElementById('resultado').textContent = `O amigo secreto é: ${amigoSorteado}`;
}