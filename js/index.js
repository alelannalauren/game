var Uscore = 0;

var highscore = 10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "your new score" + Uscore;

	If( Uscore > highscore) {
		document.getElementById('highscore').innerHTML = "New Highscore" + Uscore;
		return;
	}
}