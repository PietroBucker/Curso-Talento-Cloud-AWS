
function connect() {
    console.log("Conexão feita com sucesso!");

}
connect();
connect();
connect();


const h1 = document.getElementById('titulo');
const ol = document.getElementById('lista-ordenada');
const ul = document.getElementsByTagName('ul');
const a = document.getElementsByTagName('a');

// --exercicio de add pelo dom--
const body = document.body;
const newTitle = document.createElement('h1')
newTitle.innerText = 'fui add pelo DOM'
body.appendChild(newTitle)
// --------------------

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