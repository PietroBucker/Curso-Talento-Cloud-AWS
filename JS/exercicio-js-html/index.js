
function connect() {
    console.log("Conexão feita com sucesso!");

}
connect();
connect();
connect();


let h1 = document.getElementById('titulo');
let ol = document.getElementById('lista-ordenada');
let ul = document.getElementsByTagName('ul');
let a = document.getElementsByTagName('a');

h1.innerText = 'deu certo'
a[0].innerText = 'esse link vai pro course'
ol.innerHTML = `
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
`

ul[0].innerHTML = `
<a href="http://127.0.0.1:5500/JS/exercicio-js-html/index.html">link 1</a>
<a href="link2">link 2</a>
<a href="link3">link 3</a>
`