function updater (ydke) {
	const payload = {
		url: document.getElementById('url').value,
		english_names: document.getElementById('english_names').checked,
		ydke: ydke
	};
	document.getElementById('result').innerText = 'Loading.';
	result=fetch("https://three-abrupt-chips.glitch.me/convert", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
  		body: JSON.stringify(payload)
	})
	.then(response => response.json())
	.then(data => {
		document.getElementById('result').innerText = data.result || JSON.stringify(data);
	})
}
