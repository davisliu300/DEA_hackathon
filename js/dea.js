// DEA javascript file


var team = "DEA";



for(var index = 0; index < movies.feed.entry.length; index++){	

	var moviesTitles = movies.feed.entry[index].title.label;
    var moviesList = movies.feed.entry[$(this).attr('index')];
    console.log(movies.feed.entry[index]);
    var specific_movie_title = movies.feed.entry[index]['im:name'].label;
    var thumb_image = $("<img/>").attr('src',moviesList['im:image'][0].label).addClass('small_thumb');
    var clear=$("<div/>").addClass("clearfloat");
	var asideTitleDiv = $('<div/>').addClass("movie_info_link").attr('id', "movie" + index).append(thumb_image).append(moviesTitles).attr('index',index);
	$('aside').append(asideTitleDiv).append(clear);;
	
// looping thro protoMovieClasses and apply it to Movie title (color)	
/*
	var protoMovieClasses = ['protoMovieTitleRed', 'protoMovieTitleBlack','protoMovieTitleGreen'];
	asideTitleDiv.addClass(protoMovieClasses[index]);
	*/
    var section = $('section');
	(function(){
        var this_index = index;
        
        $('#movie' + index).click(function(){
            var moviesList = movies.feed.entry[this_index];
            var section_content = $('<span/>').html(
    "Genre: "+ moviesList.category.attributes.label + "<br>" +
    "Release Date: "+ moviesList["im:releaseDate"].attributes.label+ "<br/>");
            var summary_span = $("<span/>").addClass('summary_text').append("<img class='thumb_image' src ='"+ moviesList['im:image'][2].label+"'>").append("Summary:" + moviesList.summary.label);
            
            if(section.hasClass('appear')){
                section.removeClass('appear');
                section.animate({
                    textmargin: '20px'
                    },500, function(){
                        console.log('done');
                        section.html('');
                        section.append(section_content,summary_span).addClass('appear');
                    }
                );
            }
            else{
                
                section.append(section_content,summary_span).addClass('appear');
            }
            
            

            

            
        });
    })();
    
}

function showTrailer(target){
    console.log("starting trailer");
    $.ajax({
        url:"https://gdata.youtube.com/feeds/api/videos?q="+target+"%20trailer&orderby=published&start-index=1&max-results=1&alt=json",
        datatype:'jsonp',
        success: function(data){
            $("#dropshadow").show();
            $("#video_modal").show();
            var initial_src = data.feed.entry[0].link[0].href;
            var start = initial_src.indexOf('v=');
            var end = initial_src.indexOf('&feature');
            var src_clip = initial_src.substring(start+2,end);
            $("#ytplayer").attr('src','http://www.youtube.com/embed/'+src_clip);
            console.log(src_clip);

        }
    });
}
function hidemovie(){
     $("#ytplayer").attr('src','');
    $("#dropshadow").hide();
    $("#video_modal").hide();    
}


