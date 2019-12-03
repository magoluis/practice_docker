
var formulario = document.getElementById("formCorrecto");

document.getElementById('enviarDatos').addEventListener("click",getUsers);
document.getElementById('obtenerDatos').addEventListener("click",getOne);

function getUsers(){

	formulario.addEventListener("submit",function(e){
	e.preventDefault();

	var datos = new FormData(formulario)

	var url = 'http://localhost:3000/municipio';

	fetch(url, {

		method: 'POST',
		body: JSON.stringify({

			"id": datos.get('inp_id'),
			"nombre": datos.get('inp_nombre')

		}),
		headers:{
			'Content-Type': 'application/json'
		}

	}).then(res => res.json())
	.catch(error => console.error('error:', error ))
	.then(response => console.log('Success',response));

	location.reload();

});



}


function getOne(){

	formulario.addEventListener("submit",function(e){
	e.preventDefault();

	var datos = new FormData(formulario)

	var url = 'http://localhost:3000/municipio/' + datos.get('inp_id');


	fetch(url)
	.then((res) => res.json())
	.then((data) =>{


		let output = '<a class="list-group-item list-group-item-action active">Tuiters creados </a>';

		data.forEach(function(user){

			output += `
			<a class="list-group-item list-group-item-action"> ${ user.id_municipio }</a>
			<a class="list-group-item list-group-item-action disabled" > ${ user.nombre } </a>`;

		});

		document.getElementById('output2').innerHTML = output;	

	});

});




}