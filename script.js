var currentTrail = "black-trail"
var previousTrail = ""

var blackBtn = document.getElementById("blackBtn");
var eraserBtn = document.getElementById("eraserBtn");
var resetBtn = document.getElementById("resetBtn");
var grid = document.getElementById("gridContainer");
var sixteenBtn = document.getElementById("sixteenBtn");
var thirtyTwoBtn = document.getElementById("thirtyTwoBtn");
var sixtyFour = document.getElementById("sixtyFourBtn");

blackBtn.addEventListener('click', () => changeTrailEffect("black")) //when i click on black button it turns into eraser trail
eraserBtn.addEventListener('click', () => changeTrailEffect("white"))
resetBtn.addEventListener("click",() => clearGrid())
sixteenBtn.addEventListener("click",() => changeGridSize(16))
thirtyTwoBtn.addEventListener("click",() => changeGridSize(32))
sixtyFour.addEventListener("click",() => changeGridSize(64))

function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)` //parameters: number, width
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < size * size; i++){
        const gridElement = document.createElement("div");
        gridElement.addEventListener("mouseover", handleMouseOver)
        grid.appendChild(gridElement)
    }
}

function changeTrailEffect(trailEffect){
    previousTrail = currentTrail; //before you change the current trail, you want to save it

    if (trailEffect === "black"){
        currentTrail = "black-trail"
        console.log("black trail")
    }
    if (trailEffect === "white"){
        currentTrail = "eraser-trail"
        console.log("eraser trail")
    }
}

function handleMouseOver(event){
    event.target.classList.add(currentTrail) //gridElement is event.target 
    if ((previousTrail != "") && (previousTrail != currentTrail)){
        event.target.classList.remove(previousTrail)
    }
}

function clearGrid(){
    grid.innerHTML = ''
    currentTrail = "black-trail"
}

function changeGridSize(gridSize){
    clearGrid();
    setupGrid(gridSize);
}

setupGrid(16);