(function() {
	let tableBody = $('#table-body');
	const postList = JSON.parse(localStorage.getItem('post'));

	const actionElement = (numId) => {
		let	td = document.createElement('td'),
			btnEdit = document.createElement('button'),
			btnDelete = document.createElement('button');

		btnEdit.setAttribute('type', 'button');
		btnEdit.setAttribute('id', 'edit' + numId);
		btnEdit.classList.add('btn', 'btn-secondary', 'btn-sm', 'mr-1');
		btnEdit.textContent = 'Editar';

		btnDelete.setAttribute('type', 'button');
		btnDelete.setAttribute('id', 'delete' + numId);
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
			tr.appendChild(actionElement(key));
			tableBody[0].appendChild(tr);
		}
	};
	listPosts();

	const redirect = () => {
		let btnEdit = document.querySelectorAll('button[id^=edit]');
		btnEdit.forEach(function(item) {
			item.addEventListener('click', function(){
				window.location.href = 'edit.html';
			});
		});
	}
	redirect();

})();