function add() {
	//Almacenar comentario
	var comments = document.getElementById("comment").value;
	//Borra el comentario en el cuadro, después de haber sido almacenado
	document.getElementById("comment").value = "";
	var newComments = document.createElement('div');
	var cont = document.getElementById('cont');

	var check = document.createElement('input');
	check.type = 'checkbox'

	var paragraph = document.createElement('p')
	paragraph.classList.add('color')
	var nodoText = document.createTextNode(comments)
	paragraph.appendChild(nodoText)

	var heart = document.createElement('i')
	heart.classList.add('fa', 'fa-heart', 'heart')

	var trash = document.createElement('i')
	trash.classList.add('fa', 'fa-trash', 'trash')

	newComments.appendChild(check)
	newComments.appendChild(trash)
	newComments.appendChild(heart)
	newComments.appendChild(paragraph)
	cont.appendChild(newComments)

	check.addEventListener('click', function(){
		paragraph.classList.toggle('strike-out');
	})

	trash.addEventListener('click', function(){
		cont.removeChild(newComments);
	})

	heart.addEventListener('click', function(){
		heart.classList.toggle('red')
	})
}