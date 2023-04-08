for(var i = 0; i < document.querySelectorAll(".set button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        //We will use the switch to play the audio according to the clicked button
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

document.addEventListener("keyup", function(event){
    document.querySelector("." + event.key).classList.remove("pressed"); //Remove a classe pressed quando o botão levantar
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;   

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;            

        case "k":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        default:
            console.log(buttonClicked);
        break;
    }
}

function buttonAnimation (button) {
    var activeButton = document.querySelector("." + button);
    activeButton.classList.add("pressed");
}