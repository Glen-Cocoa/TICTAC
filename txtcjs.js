$(function(){
	
	var turn = 1

	$('.space').one('click', function(e) {
		turn++
		if(turn == 10){
			gameOver()
			}
		else if(turn % 2 == 0){
			$(this).text('X')
			checkWinX()
			}
		else if(turn % 2 !==0){
			$(this).text('O'
			checkWinO()
			}
		});
	});

	function checkWinX(){
		if($('#00').text() !=='' 
			&& $('#00').text() == 'X' 
			&& $('#01').text() == 'X' 
			&& $('#02').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#00').text() !==''
			&& $('#00').text() == 'X' 
			&& $('#11').text() == 'X' 
			&& $('#22').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#00').text() !=='' 
			&& $('#00').text() == 'X' 
			&& $('#10').text() == 'X' 
			&& $('#20').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#01').text() !=='' 
			&& $('#01').text() == 'X' 
			&& $('#11').text() == 'X' 
			&& $('#21').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#02').text() !=='' 
			&& $('#02').text() == 'X' 
			&& $('#12').text() == 'X' 
			&& $('#22').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#02').text() !=='' 
			&& $('#02').text() == 'X' 
			&& $('#12').text() == 'X' 
			&& $('#22').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#10').text() !=='' 
			&& $('#10').text() == 'X' 
			&& $('#11').text() == 'X' 
			&& $('#12').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
		else if($('#20').text() !=='' 
			&& $('#20').text() == 'X' 
			&& $('#21').text() == 'X' 
			&& $('#22').text() == 'X'){
		alert('X has won!')
		doOver()
			})
		}
	}

	function checkWinO(){
		if($('#00').text() !=='' 
			&& $('#00').text() == 'O' 
			&& $('#01').text() == 'O' 
			&& $('#02').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#00').text() !=='' 
			&& $('#00').text() == 'O' 
			&& $('#11').text() == 'O' 
			&& $('#22').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#00').text() !=='' 
			&& $('#00').text() == 'O' 
			&& $('#10').text() == 'O' 
			&& $('#20').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#01').text() !=='' 
			&& $('#01').text() == 'O' 
			&& $('#11').text() == 'O' 
			&& $('#21').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#02').text() !=='' 
			&& $('#02').text() == 'O' 
			&& $('#12').text() == 'O' 
			&& $('#22').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#02').text() !=='' 
		&& $('#02').text() == 'O' 
		&& $('#12').text() == 'O' 
		&& $('#22').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#10').text() !=='' 
			&& $('#10').text() == 'O' 
			&& $('#11').text() == 'O' 
			&& $('#12').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
		else if($('#20').text() !=='' 
			&& $('#20').text() == 'O' 
			&& $('#21').text() == 'O'
			&& $('#22').text() == 'O'){
		alert('O has won!')
		doOver()
			})
		}
	}

	function gameOver(){
		alert('Nobody wins. Try Again.')
		window.location.reload()
		}

	function doOver(){
	location.reload()
	}
