

function theGreatAlphabetWar (fight){
    const allLetters = fight.split("");
    totalLeftSidePower = 0;
    totalRightSidePower = 0;

    for (let i = 0; i < allLetters.length; i++){
        if (allLetters[i] === 'w'){
            totalLeftSidePower += 4;
        } else if (allLetters[i] === 'p'){
            totalLeftSidePower += 3;
        } else if (allLetters[i] === 'b'){
            totalLeftSidePower += 2;
        } else if (allLetters[i] === 's'){
            totalLeftSidePower += 1;
        } else if (allLetters[i] === 'm'){
            totalRightSidePower += 4;
        } else if (allLetters[i] === 'q'){
            totalRightSidePower += 3;
        } else if (allLetters[i] === 'd'){
            totalRightSidePower += 2;
        } else if (allLetters[i] === 'z'){
            totalRightSidePower += 1;
        } else {
            totalLeftSidePower += 0;
            totalRightSidePower += 0;
        }
    }

    
    if (totalLeftSidePower > totalRightSidePower){
        return "Left side wins!";
    } else if (totalRightSidePower > totalLeftSidePower){
        return "Right side wins!";
    } else {
        return "Let's fight again!"
    }

}

console.log(theGreatAlphabetWar("wwwwwwz"));