(function() {
	let formTitle = $('#input-title');
	let formDescription = $('#input-description');
	let formFile = $('#input-file');
	let formBtn = $('#input-button');

	formBtn.on('click', function() {
		savePost(formTitle[0].value, formDescription[0].value, formFile[0].value);
		let alert = $('.alert');
		alert[0].classList.remove('d-none');
		alert[0].classList.add('alert-success');
	});
})();