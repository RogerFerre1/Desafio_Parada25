let convidados = [];
let ul = document.getElementById("lista");

for(let x = 0; x < convidados.length; x++){
    ul.innerHTML += `<li> ${convidados[x]} </li>`;
}

function add_conv(){
    let c = document.getElementById("i_convidado").value;
    convidados.push(c);

    document.getElementById("i_convidado").value = "";
    desenha_lista();
}

function desenha_lista(){
    ul.innerHTML = "";
    for(let x = 0; x < convidados.length; x++){
        ul.innerHTML += `<li> ${convidados[x]} </li>`;
    }
}

function remove_conv(){
    convidados.pop();
    desenha_lista();
}


