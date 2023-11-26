let myPoints = '';
        let computerPoints = '';
        let computerMoveResult='';
        let result='';
        let computerImg = document.createElement('img');
        let img = document.createElement('img');
        img.style.width = '80px';
        computerImg.style.width = '80px';

        function displayResult(result) {
            const tryElement = document.getElementById('try');
            tryElement.innerHTML = result;

            if (result === 'win') {
                tryElement.style.color = '#4caf50';
            } else if (result === 'lose') {
                tryElement.style.color = '#e74c3c';
            } else {
                tryElement.style.color = 'rgb(226, 117, 16)';
            }
        }

        function computerMove(){
            const randomNumber = Math.random();

            if (randomNumber >= 0 && randomNumber < 1 / 3){
                computerMoveResult = 'rock';
                computerImg.src = 'images/rock.png'; 
                }
                else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
                computerMoveResult = 'paper';
                computerImg.src = 'images/paper.png'; 
                }
                else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3){
                computerMoveResult = 'scissors';
                computerImg.src = 'images/scissors.png'; 
                }

            return computerMoveResult;
            return computerImg;
        }

        function playGame(playerMove){
            computerMove()

            if (playerMove === 'rock'){
                img.src = 'images/rock.png'; 
                if(computerMoveResult=== 'rock'){
                    result ='tie'
                } else if (computerMoveResult=== 'paper'){
                    result ='lose'
                    computerPoints ++;
                    document.getElementById('computer-points').innerHTML = computerPoints;
                } else if (computerMoveResult=== 'scissors'){
                    result ='win'
                    myPoints ++;
                    document.getElementById('my-points').innerHTML = myPoints;
                }

                document.getElementById('myChoice').innerHTML = '';
                document.getElementById('myChoice').appendChild(img);
                document.getElementById('computerChoice').innerHTML = '';
                document.getElementById('computerChoice').appendChild(computerImg);
                document.getElementById('try').innerHTML = result;
                displayResult(result);
            }

            if (playerMove === 'paper'){
                img.src = 'images/paper.png'; 
                if(computerMoveResult=== 'rock'){
                    result ='win'
                    myPoints ++;
                    document.getElementById('my-points').innerHTML = myPoints;
                } else if (computerMoveResult=== 'paper'){
                    result ='tie'
                } else if (computerMoveResult=== 'scissors'){
                    result ='lose'
                    computerPoints ++;
                    document.getElementById('computer-points').innerHTML = computerPoints;
                }

                document.getElementById('myChoice').innerHTML = '';
                document.getElementById('myChoice').appendChild(img);
                document.getElementById('computerChoice').innerHTML = '';
                document.getElementById('computerChoice').appendChild(computerImg);
                document.getElementById('try').innerHTML = result;
                displayResult(result);
            }

            if (playerMove === 'scissors'){
                img.src = 'images/scissors.png'; 
                if(computerMoveResult=== 'rock'){
                    result ='lose'
                    computerPoints ++;
                    document.getElementById('computer-points').innerHTML = computerPoints;
                } else if (computerMoveResult=== 'paper'){
                    result ='win'
                    myPoints ++;
                    document.getElementById('my-points').innerHTML = myPoints;
                } else if (computerMoveResult=== 'scissors'){
                    result ='tie'
                }

                document.getElementById('myChoice').innerHTML = '';
                document.getElementById('myChoice').appendChild(img);
                document.getElementById('computerChoice').innerHTML = '';
                document.getElementById('computerChoice').appendChild(computerImg);
                document.getElementById('try').innerHTML = result;
                displayResult(result);
            }

        }

        function resetScore(){
            myPoints = '0';
            computerPoints = '0';
            document.getElementById('my-points').innerHTML = myPoints;
            document.getElementById('computer-points').innerHTML = computerPoints;
            document.getElementById('computerChoice').innerHTML = 'Computer';
            document.getElementById('myChoice').innerHTML = 'Player';
            document.getElementById('try').innerHTML = '';
        }
