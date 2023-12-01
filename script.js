let num = window.document.querySelector("input#fnum");
let lista = window.document.querySelector("select#filista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `valor ${num.value}adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ``;
    } else {
        window.alert("valor invalido ou ja encontrado na lista.");
    }
    num.value = ``;
    num.focus();
}
function finalizar() {
    if (valores.length == 0) {
        window.alert("adicione valores antes de finalizar ");
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) maior = valores[pos];
            if (valores[pos] < menor) menor = valores[pos];
        }
        media = soma / tot;

        let resultado = "";
        resultado += `<p> ao todo, tenho ${tot} numero castradado.</p>`;
        resultado += ` <p> o maior valor informando foi ${maior}<p>`;
        resultado += `<p> o menor valor informado foi ${menor} <p>`;
        resultado += ` <p> somando todos os valores,temos ${soma} <p>`;
        resultado += `<p> media dos valores digitados e ${media}`;

        res.innerHTML = resultado;
    }
}
