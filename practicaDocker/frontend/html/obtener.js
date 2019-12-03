


	fetch('http://localhost:3000/municipio')
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



