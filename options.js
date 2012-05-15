function save_options() {
	localStorage["enabled"] = document.getElementById('enabled').checked;
	localStorage["blacklist"] = document.getElementById('blacklist').value;
}

function restore_options() {
	if (localStorage["enabled"] !== "false") {
		document.getElementById('enabled').checked = true;
	} else {
		enabled_clicked();
	}

	document.getElementById('blacklist').value = localStorage["blacklist"] ? localStorage["blacklist"] : "";
}

function enabled_clicked() {
	document.getElementById('blacklist').disabled = !document.getElementById('enabled').checked;
}

document.addEventListener('DOMContentLoaded', function () {
	restore_options();
	document.querySelector('button').addEventListener('click', save_options);
	document.querySelector('#enabled').addEventListener('click', enabled_clicked);
});