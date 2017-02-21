window.addEventListener('load', function(){

	function getJSON(e){
		e.preventDefault();
		var movieSearchRequest = new XMLHttpRequest();
		var userSearch = event.target.previousElementSibling.value;
		movieSearchRequest.open('GET', 'http://localhost:4567/results?query=' + userSearch);
		movieSearchRequest.onload = function(){
			
			var searchArray = movieSearchRequest.responseText;
			searchResults = JSON.parse(searchArray);
			i = 0;
			resetResults();
		}
		movieSearchRequest.send();
	}

	function resetResults(){
		var resultNode = document.getElementById("results");
		while (resultNode.firstChild) {
		    resultNode.removeChild(resultNode.firstChild);
		}
		fillResultsTag();
	}

	function fillResultsTag(){
		console.log(searchResults);
		var resultClass = document.getElementById("results");
		var posterTag = document.createElement("img");
		posterTag.setAttribute("src", searchResults.Search[i].Poster);

		var movieTitle = document.createElement("h1");
		movieTitle.innerHTML = searchResults.Search[i].Title;

		var yearMade = document.createElement("div");
		yearMade.innerHTML = searchResults.Search[i].Year;
		makeResultsVisible(resultClass, posterTag, movieTitle, yearMade);
	}

	function makeResultsVisible(resultClass, poster, title, year){
		resultClass.appendChild(poster);
		resultClass.appendChild(title);
		resultClass.appendChild(year);
		resultClass.style.display = "block";
		var moveDiv = document.getElementById("moveButtons");
		if (moveDiv.style.display = "none"){
			moveDiv.style.display = "block";
		}
	}

	function nextMovie(e){
		e.preventDefault();
		if (i < (searchResults.Search.length -1)){
			i++;
			resetResults();
		}
	}

	function prevMovie(e){
		e.preventDefault();
		if(i > 0){
			i--;
			resetResults();
		}
	}

	var searchClick = document.getElementsByClassName("button");
	var i = 0;
	var searchResults;
	var nextClick = document.getElementById("nextButton");
	nextClick.addEventListener("click", nextMovie);
	var prevClick = document.getElementById("prevButton");
	prevClick.addEventListener("click", prevMovie);
	searchClick[0].addEventListener("click", getJSON);
});














