// Captura o evento load da página
window.onload=function(){
	// Seleciona a div do documento
	var a_div = document.getElementById('a-div');
	
	// Cria um novo nó <p>
	var novo_p = document.createElement('p');
	
	// Altera a cor de fundo do novo <p>
	novo_p.style.background = 'red';
	// https://www.w3schools.com/jsref/dom_obj_style.asp 
	novo_p.style.font = "italic bold 200px arial,serif";
	
	// Cria um novo nó de texto
	var novo_texto = document.createTextNode('Este é o texto do p!');

	// Adiciona o nó de texto no parágrafo
	novo_p.appendChild(novo_texto);
	
	// Adiciona o nó <p> com seu texto na nossa div
	a_div.appendChild(novo_p);
	
	// Conta 5 segundos e remove o novo elemento
	setTimeout(function(){
		// Remove o nó <p>
		a_div.appendChild(novo_p.style.fontSize=('100px')); 
    }, 5000);

	function apagarTexto() {
		a_div.removeChild(novo_p);
	}

	function mostrarTexto() {
		a_div.appendChild(novo_p);
		novo_p.style.backgroundColor = "blue";
	}

	setTimeout(apagarTexto, 7000);
	setTimeout(mostrarTexto, 9000);
}