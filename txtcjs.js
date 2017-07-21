$(function(){

//turn counter determine x or o 

		var turn = 0
	
//on click space should insert X or O and change to next turn

		$('.space').on('click', function(e) {
			turn ++
				if (turn >= 9) {
					gameOver()
					}
				if (turn % 2 == 0) {
					$(this).text('X')
					}
				if (turn % 2 !== 0) {
					$(this).text('O')
					}
			});

//game over draw function restarts page

		function gameOver(){
			alert('Nobody wins. Just like the real world.')
			window.location.reload()
			}

//check if game ended and alert winner

		
