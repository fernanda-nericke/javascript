// Captura o evento load da página
window.onload=function(){
	// Localiza o elemento
	var div = document.getElementById('minha_div');
	// O link
	var clique = document.getElementById('clique');

	var resetar = document.getElementById('resetar');

	var diminuir = document.getElementById('diminuir');

	// Captura o evento de clique no link
	clique.onclick=function(){
		// Verifica se getComputedStyle é suportado
		if( 'getComputedStyle' in window ){
			var altura = window.getComputedStyle(div).height;
			var largura = window.getComputedStyle(div).width;
		} else {
			// Obtém a largura para navegadores antigos
			var altura = div.currentStyle.height;
			var largura = div.currentStyle.width;
		}

		
		var nova_cor =  window.getComputedStyle(div).backgroundColor;
		console.log(nova_cor);
		if(nova_cor == "rgb(255, 0, 0)"){
			nova_cor = "rgb(0, 0, 255)";
		}else{
			nova_cor = "rgb(255, 0, 0)";
		}
		
		// Garante que temos apenas números
		altura = parseInt(altura);
		largura = parseInt(largura);
		
		// Configura mais 10 na largura
		altura += 10;
		largura += 10;

		// Configura aumenta o tamanho da div a cada clique
		div.style.height = altura + 'px';
		div.style.width = largura + 'px';
		div.style.backgroundColor = nova_cor;
		
		// Retorna falso para não atualizar a página
		return false;
	}

	resetar.onclick = function (){
		div.style.width = '200px';
		div.style.height = '200px';
	}

	diminuir.onclick = function(){
		if( 'getComputedStyle' in window ){
			var altura = window.getComputedStyle(div).height;
			var largura = window.getComputedStyle(div).width;
		} else {
			// Obtém a largura para navegadores antigos
			var altura = div.currentStyle.height;
			var largura = div.currentStyle.width;
		}

		
		var nova_cor =  window.getComputedStyle(div).backgroundColor;
		console.log(nova_cor);
		if(nova_cor == "rgb(255, 0, 0)"){
			nova_cor = "rgb(0, 0, 255)";
		}else{
			nova_cor = "rgb(255, 0, 0)";
		}
		
		// Garante que temos apenas números
		altura = parseInt(altura);
		largura = parseInt(largura);
		
		// Configura mais 10 na largura
		altura -= 10;
		largura -= 10;

		// Configura aumenta o tamanho da div a cada clique
		div.style.height = altura + 'px';
		div.style.width = largura + 'px';
		div.style.backgroundColor = nova_cor;
		
		// Retorna falso para não atualizar a página
		return false;
	}
}