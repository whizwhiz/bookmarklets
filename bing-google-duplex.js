/* 
Bookmarklet to send Bing search query to Google and vice versa
*/ 

// Bookmarklet code/URL - create a bookmark with the line below as the URL
javascript:(function(){var qStr=document.getElementsByName('q')[0].value;var goog="https://www.google.co.uk/search?q=";var bing="https://www.bing.com/search?q=";if(location.href.indexOf(".google.")>0){location.href=bing+qStr;}else if(location.href.indexOf(".bing.")>0){location.href=goog+qStr;}else{console.log("neither Goog/Bing");}})();




// Same code as above with formatting
javascript:(function(){
	var qStr=document.getElementsByName('q')[0].value;
	var goog="https://www.google.co.uk/search?q=";
	var bing="https://www.bing.com/search?q=";
	if(location.href.indexOf(".google.")>0){
		location.href=bing+qStr;
	}
	else if(location.href.indexOf(".bing.")>0){
		location.href=goog+qStr;
	}
	else{
		console.log("neither Goog/Bing");
	}
}
)();



// ---------------------------------------------------------------
// BONUS: Bing to Google to Youtube, then repeat
javascript:(function(){if (document.getElementsByName('q')[0] == undefined) {var ytQ=document.getElementsByName('search_query')[0].value;} else {var qStr=document.getElementsByName('q')[0].value;}if(location.href.indexOf(".bing.")>0){location.href="https://www.google.co.uk/search?q="+qStr;}else if(location.href.indexOf(".google.")>0){location.href="https://www.youtube.com/results?search_query="+qStr;}else if (location.href.indexOf(".youtube.")>0) {location.href="https://www.bing.com/search?q="+ytQ;}else{console.log("neither Google/Bing/Youtube");}})();


javascript:(function(){
	if (document.getElementsByName('q')[0] == undefined) {
		var ytQ=document.getElementsByName('search_query')[0].value;
	} else {
		var qStr=document.getElementsByName('q')[0].value;
	}
	if(location.href.indexOf(".bing.")>0){
		location.href="https://www.google.co.uk/search?q="+qStr;
	}
	else if(location.href.indexOf(".google.")>0){
		location.href="https://www.youtube.com/results?search_query="+qStr;
	}
	else if (location.href.indexOf(".youtube.")>0) {
		location.href="https://www.bing.com/search?q="+ytQ;
	}
	else{
		console.log("neither Google/Bing/Youtube");
	}
}
)();