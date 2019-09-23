let post = {
	'title': [],
	'description': [],
	'file': []
}

let savePost = (title, description, file) => {
	post.title.push(title);
	post.description.push(description);
	post.file.push(file);

	localStorage.setItem('title', JSON.stringify(post.title));
	localStorage.setItem('description', JSON.stringify(post.description));
	localStorage.setItem('file', JSON.stringify(post.file));
}