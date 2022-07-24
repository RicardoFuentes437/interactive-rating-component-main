var score = 0;

function setScore(val){
    score = val;
    console.log(score);
}

function showScore(){
    var message = document.querySelector('.message')
    var card1 = document.querySelector('.card')
    var card2 = document.querySelector('.card-2')
    message.innerHTML = "You selected " + score + " out of 5"
    card1.style.display = "none"
    card2.style.display = "flex"
}