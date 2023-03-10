calcularMedia();

function calcularMedia(){
    let nota1 = prompt("digite a primeira nota:");
    let nota2 = prompt("digite a segunda nota:");
    let nota3 = prompt("digite a terceira nota:");

     nota1 = parseFloat(nota1);
     nota2 = parseFloat(nota2);
     nota3 = parseFloat(nota3);

     let media = (nota1 + nota2 + nota3)/3;

     let container = document.getElementById('container');

     let titulo = document.getElementById('titulo');

     let notas = document.getElementById('notas');

     let emoji = document.getElementById('emoji');
    if (media >= 6) {
        container.style.backgroundColor = "green";
        titulo.innerHTML = `aprovado: ${media}`;
        notas.innerHTML = `notas: ${nota1}, ${nota2}, ${nota3}`;
        emoji.innerHTML = '&#128526';
    } else {
        container.style.backgroundColor = "red";
        titulo.innerHTML = `reprovado: ${media}`;
        notas.innerHTML = `notas: ${nota1}, ${nota2}, ${nota3}`;
        emoji.innerHTML = '&#128557';
    }
}