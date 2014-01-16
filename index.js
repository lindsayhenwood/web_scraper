var cheerio = require('cheerio');
var request = require('request');
var filenameArray = [];

request("http://substack.net/images/", function(err, response, body) {
	if (!err && response.statusCode == 200) {

		$ = cheerio.load(body);
		$("td").each(function () {
			
			var code = $("code",$(this));
			var a = $("a",$(this));
			var ahref = a.attr('href');
			process.stdout.write(code.html() + ",");
			process.stdout.write(a.html() + ",");
			filenameArray = (ahref.split('.'));
			process.stdout.write(filenameArray[1] + "\n");

		});

	}
});


