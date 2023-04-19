// Captura o evento load da página
window.onload=function(){
	// Método para localizar um objeto
	var poo = document.getElementsByTagName('p');
	
	// Alterando a propriedade innerHTML 
	poo.item(0).innerHTML = 'Bem-vindo ao JavaScript!';
	poo.item(1).innerHTML = '07março2023';

	
}