

$(document).ready(function (){

	$("#redButton").hover( function(){
		$("#top").css("background-color", "red");
	});

	$("#yellowButton").hover( function(){
		$("#middle").css("background-color", "yellow");
	});

	$("#greenButton").hover( function(){
		$("#bottom").css("background-color", "lime");
	});


	$("#redButton").mouseout(function(){
		$("#top").css("background-color", "darkred");
	});

	$("#yellowButton").mouseout(function(){
		$("#middle").css("background-color", "darkkhaki");
	});

	$("#greenButton").mouseout(function(){
		$("#bottom").css("background-color", "forestgreen");
	});

});



