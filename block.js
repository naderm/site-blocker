chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		var blacklist = localStorage["blacklist"].split('\n');

		if (localStorage["enabled"] === "false" || !blacklist) {
			return;
		}

		for (var match in blacklist) {
			if (info.url.match(new RegExp(blacklist[match]))) {
				return {cancel: true};
			}
		}

		return;
	},
	{urls: ["http://*/*", "https://*/*"]},
	["blocking"]);