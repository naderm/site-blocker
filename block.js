chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		var blacklist = localStorage["blacklist"].split('\n');

		if (localStorage["enabled"] === "false" || !blacklist) {
			return;
		}

		for (var match in blacklist) {
			var str = blacklist[match];
			if (str !== "" && info.url.match(new RegExp(str))) {
				return {cancel: true};
			}
		}

		return;
	},
	{urls: ["http://*/*", "https://*/*"]},
	["blocking"]);
