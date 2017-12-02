//Declare variables	for target number
var target;
var targetMin = 25;
var targetMax = 35;
var tally;

//Declare variables for hidden numbers
var hidden1;
var hidden2;
var hidden3;
var hidden4;
var hidden5;
var hidden6;
var hiddenMin = 2;
var hiddenMax = 10;

//Declare variables for scoreboard
var wins = 0;
var losses = 0;

//Start a new game routine
function newGame() {
	//Set target
	target = Math.floor(Math.random() * (targetMax - targetMin) + targetMin);
	$('#target').html(target + '%');
	//Set hidden numbers
	for (i=1;i<7;i++) {
		this['hidden' + i] = Math.floor(Math.random() * (hiddenMax - hiddenMin) + hiddenMin);
		$('#hidden' + i).attr('data-number',this['hidden' + i]);
	};
	//Reset tally
	tally = 0;
	$('#tally').html(tally + '%');
};

//Start the first game
newGame();

//Click a team member routine
$('.thumbnail').click(function(){
	//Add hidden number to tally
	console.log($(this).data('number'));
	tally += $(this).data('number');
	$('#tally').html(tally + '%');
	//Check for win condition
	if(tally==target) {
		alert("YOU WIN!\n\nNow for a new month and a new growth target...");
		wins++;
		$('#wins').html(wins);
		newGame();
	//Check if loss condition
	} else if (tally>target) {
		alert("YOU LOSE!\n\nNow for a new month and a new growth target...");
		losses++;
		$('#losses').html(losses);
		newGame();
	};
	//If neither condition is met, continue on
});