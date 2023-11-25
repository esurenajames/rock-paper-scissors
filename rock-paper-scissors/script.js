 let myPoints = '';
 let computerPoints = '';
 let computerMove='';
 let result='';

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
                    return computerMove = 'rock';
                    computerImg.src = 'images/rock.png'; 
                }
                else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
                    return computerMove = 'paper';
                    computerImg.src = 'images/paper.png'; 
                }
                else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3){
                    return computerMove = 'scissors';
                    computerImg.src = 'images/scissors.png'; 
                }
        }
        
        function rock(){

            computerMove()

            const randomNumber = Math.random();
            let computerImg = document.createElement('img');
            let img = document.createElement('img');

            img.src = 'images/rock.png'; 
            img.style.width = '80px';
            computerImg.style.width = '80px';

                if(computerMove=== 'rock'){
                    result ='tie'
                } else if (computerMove=== 'paper'){
                    result ='lose'
                    computerPoints ++;
                    document.getElementById('computer-points').innerHTML = computerPoints;
                } else if (computerMove=== 'scissors'){
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

        function paper() {

            computerMove()
        
            const randomNumber = Math.random();
            let computerImg = document.createElement('img');
            let img = document.createElement('img');

            img.src = 'images/paper.png'; 
            img.style.width = '80px';
            computerImg.style.width = '80px';

                if(computerMove=== 'rock'){
                    result ='win'
                    myPoints ++;
                    document.getElementById('my-points').innerHTML = myPoints;
                } else if (computerMove=== 'paper'){
                    result ='tie'
                } else if (computerMove=== 'scissors'){
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

        function scissors() {

            computerMove()

            const randomNumber = Math.random();
            let computerImg = document.createElement('img');
            let img = document.createElement('img');

            img.src = 'images/scissors.png'; 
            img.style.width = '80px';
            computerImg.style.width = '80px';

                if(computerMove=== 'rock'){
                    result ='lose'
                    computerPoints ++;
                    document.getElementById('computer-points').innerHTML = computerPoints;
                } else if (computerMove=== 'paper'){
                    result ='win'
                    myPoints ++;
                    document.getElementById('my-points').innerHTML = myPoints;
                } else if (computerMove=== 'scissors'){
                    result ='tie'
                }

            document.getElementById('myChoice').innerHTML = '';
            document.getElementById('myChoice').appendChild(img);
            document.getElementById('computerChoice').innerHTML = '';
            document.getElementById('computerChoice').appendChild(computerImg);
            document.getElementById('try').innerHTML = result;
            displayResult(result);
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
