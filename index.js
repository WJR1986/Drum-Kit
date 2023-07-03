// Detecting click on button

for (i = 0; i < document.querySelectorAll(".drum").length; i++){
     
        // attach the listener to each button in preparation for an event such as click
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
}

        // Detecting keydown or key press
        // if a keydown is detected, the function is passed the event that triggered the keypress.
        document.addEventListener("keydown", function (event){
        // send the value of the key press that occured during the event to make sound function
        makeSound(event.key);
        buttonAnimation(event.key);

        // NOTE: event can be anything but will always represent the event. We name it event for clarity but it works the same as declaring a variable. It could be evt or e or firstEvent etc etc
});


function makeSound(key) {
    switch (key) {
        case 'w':
            // Note the lack of camel case for Audio = implies it is a constructor method we are using to create a new audio object
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
            break;
        
        case 'l':
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    
    //Selec the current button with the cureent key. We have to concatenate the expression with a .(dot) as that is how we refer to classes in CSS.
    let activeButton = document.querySelector("." + currentKey);
    
    // add the css class of .pressed
    activeButton.classList.add("pressed");
    
    // wait 100 == 0.1 of a second (e.g. 1000 == 1000ms == 1s)
    setTimeout(() => {
        // then turn off / remove the styling class of .pressed
        activeButton.classList.remove("pressed");
    }, 100)
   
}