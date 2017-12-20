console.log('=========================================');
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  	document.getElementById('addonData').innerHTML = 'Loading...';
    if (this.readyState == 4 && this.status == 200) {
    	var jsonData = JSON.parse(this.responseText);
    	var data = jsonData['breaking_news'];
    	data = data.slice(0, 5);
    	var html = '';
      	data.map(function(news){
      		html += '<div class="news-wrap">'
      			+'<div class="col-md-11">'
      			+'<img class="small-image" src="'+ news.thumbnail +'">'
      			//+'</div>'
      			//+'<div class="col-md-6">'
      			+'<a href="'+ news.url +'">' + news.title + '</a>'
      			+'</div>'
      			+'<hr>'
      			+'</div>';
      	});
      	document.getElementById('addonData').innerHTML = html;
    }
  };
  xhttp.open("GET", "http://www.ekantipur.com/newsdigest/nepali", true);
  xhttp.send();
 console.log('=========================================');
