(function() {
	let getDatetime = () => {
		let datetime = new Date();
		let time = datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();

		return time;
	}

	let setDatetime = (element) => {
		let _element = $(element);
		let datetime = getDatetime();
		
		_element.text(datetime);
	}

	setInterval(() => {
		setDatetime("#datetime");
	}, 1000);	
})();