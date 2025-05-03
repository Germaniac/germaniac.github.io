function updater (ydke) {
	const payload = {
		url: document.getElementById('url').value,
		english_names: document.getElementById('english_names').checked,
		ydke: ydke
	};
	document.getElementById('result').innerText = 'Loading.';
	result=fetch("https://082f957c-b392-4f8f-aa7f-4489a09215bd-00-oivlr7zrcib4.sisko.replit.dev/convert", {
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
