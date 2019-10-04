let post = {};

function setPost(id, title, description) {
	if (post[id]) {
		post[id].push(title);
		post[id].push(description);
	}
	else {
		post[id] = [title, description];
	}
}

let savePost = (title, description, file) => {
	let keyPost = (Object.keys(post));
	let id = keyPost.length ? parseInt(keyPost[keyPost.length-1]) + 1 : 0;	

	setPost(id, title, description);
	let set = post;

	localStorage.setItem('post', JSON.stringify(set));
}