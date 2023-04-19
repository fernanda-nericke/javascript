// Captura o evento load da página
window.onload=function(){
	// Método para localizar um objeto
	var p = document.getElementsByTagName('p'); 
	var a = p.item(0).getElementsByTagName('a');
	
	// Agora consegui uma coleção de links dentro do p
	// Mas primeiro tive que passar pelo 
	// document e qualquer método para localizar elementos
	alert(p);
	alert(a);

	// Obtém o texto do primeiro elemento a
	var texto = a[0].childNodes[0].nodeValue;
	//alert(texto);

var texto = a[0].innerHTML;
alert(texto);
// var texto = a[2].innerHTML;
// alert(texto);


	// resumo
	/*

// Método para localizar os parágrafos de todo o documento
	var p = document.getElementsByTagName('p');
	
	// Método pega localizar os elementos a dentro do primeiro parágrafo
	var a = p.item(0).getElementsByTagName('a');
	
	// O texto de a
	var texto = a[0].innerHTML;

	*/
}