//DEA javascript file

var team = "DEA";



for(var index = 0; index < movies.feed.entry.length; index++){	

	var moviesTitles = movies.feed.entry[index].title.label;
	var asideTitleDiv = $('<div/>').attr('id', "movie" + index).html(moviesTitles).attr('index',index);
	$('aside').append(asideTitleDiv);
	
// looping thro protoMovieClasses and apply it to Movie title (color)	
/*
	var protoMovieClasses = ['protoMovieTitleRed', 'protoMovieTitleBlack','protoMovieTitleGreen'];
	asideTitleDiv.addClass(protoMovieClasses[index]);
	*/
	
	$('#movie' + index).click(function(){
		var moviesList = movies.feed.entry[$(this).attr('index')];
		$('section').html(
"Genre: "+ moviesList.category.attributes.label + "<br>" +
"Release Date: "+ moviesList["im:releaseDate"].attributes.label+ "<br/>"+ 
"Summary: " + moviesList.summary.label);
console.log(moviesList['im:image'][0].label);
$('section').append("<img src ='"+ moviesList['im:image'][0].label+"'>");	

});
}


