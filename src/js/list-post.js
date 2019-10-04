(function() {
	let tableBody = $('#table-body');
	const postList = JSON.parse(localStorage.getItem('post'));

	const actionElement = () => {
		let	td = document.createElement('td'),
			btnEdit = document.createElement('button'),
			btnDelete = document.createElement('button');

		btnEdit.setAttribute('type', 'button');
		btnEdit.classList.add('btn', 'btn-secondary', 'btn-sm', 'mr-1');
		btnEdit.textContent = 'Editar';

		btnDelete.setAttribute('type', 'button');
		btnDelete.classList.add('btn', 'btn-danger', 'btn-sm');
		btnDelete.textContent = 'Excluir';

		td.appendChild(btnEdit);
		td.appendChild(btnDelete);

		return td;
	}

	const listPosts = () => {
		for (let key in postList) {
			let tr = document.createElement('tr'),
				tdTitle = document.createElement('td'),
				tdDescription = document.createElement('td');

			tdTitle.textContent = postList[key][0];
			tdDescription.textContent = postList[key][1];

			tr.appendChild(tdTitle);
			tableBody[0].appendChild(tr);
			tr.appendChild(tdDescription);
			tableBody[0].appendChild(tr);
			tr.appendChild(actionElement());
			tableBody[0].appendChild(tr);
		}
	};
	listPosts();
})();