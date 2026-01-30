function updater (ydke) {
	const payload = {
		url: document.getElementById('url').value || document.getElementById('url').placeholder,
		english_names: document.getElementById('english_names').checked,
		ydke: ydke
	};
	document.getElementById('result').value = 'Loading.';
	result=fetch("https://major-regine-germaniac-0fb5d6b4.koyeb.app/convert", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
  		body: JSON.stringify(payload)
	})
	.then(response => response.json())
	.then(data => {
		document.getElementById('result').value = data.result || JSON.stringify(data);
	})
}
