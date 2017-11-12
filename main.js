try{Typekit.load();}catch(e){}

var feed = new Instafeed({
		get: 'user',
		userId: 33969486,
		clientId: 'cbffec43b7ab4d928debe26f7f20a75f',
		accessToken: '33969486.cbffec4.24b30e38bca3414188358a2705892858',
		target: 'instagram',
		limit: 5,
		resolution: 'standard_resolution',
		template: '<a href="{{link}}"><img src="{{image}}" width="200" height="200" /></a>&nbsp;',
		after: function() {
			var el = document.getElementById('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});

window.onload = function() {
	feed.run();
};
