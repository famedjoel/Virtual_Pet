// Define feelings object to store pet's status
let feelings = {
    play: 0,
    energy: 100,
    happy: 0,
    clean: 100,
    food: 100
};

// Get the current timestamp as the starting time
let startTime = new Date().getTime();

// Variable to keep track of sleep mode
let sleepMode = false;

// Function to set the play status to 100 when the play button is clicked
function play() {
    feelings.play = 100;
}

// Function to control the play status continuously
function playController() {
    feelings.play = Math.max(0, --feelings.play);
    raiseHands();
}

// Function to move the hand based on the play status
function raiseHands() {
    const leftHand = document.querySelector('#left-hand');
    const rightHand = document.querySelector('#right-hand');
    leftHand.setAttribute('transform', `translate(250, 325) rotate(${feelings.play - 50})`);
    rightHand.setAttribute('transform', `translate(355, 325) rotate(${-feelings.play + 50})`);
}

// Call playController every 100 milliseconds
setInterval(playController, 100);

// Get the play button element and attach the play function to it
const btn = document.querySelector('#btn');
btn.addEventListener('click', play);

// Clean section
const decRate = 1;

// Function to increase the clean status
function clean() {
    if (feelings.clean >= 100) {
        return;
    }
    feelings.clean += 10;
}

// Function to reduce the clean status over time
function reduceTimeClean() {
    feelings.clean -= decRate;
    feelings.clean = Math.max(0, feelings.clean);
    feelings.clean = Math.min(100, feelings.clean);
    handleCleanMeter();
}

// Function to update the clean meter
function handleCleanMeter() {
    document.querySelector("#cleanMeter").value = feelings.clean;
}

// Get the clean button element and attach the clean function to it
const buttonClean = document.querySelector("#cleanButton");
buttonClean.addEventListener('click', clean);

// Call reduceTimeClean every 1000 milliseconds
setInterval(reduceTimeClean, 1000);

// Food section
function food() {
    if (feelings.food >= 100) {
        return;
    } else if (feelings.food <= 0) {
        clearInterval(updateInterval);
        displayOutcome();
    }
    feelings.food += 1;
}

// Function to display outcome when food status reaches 0
function displayOutcome() {
    const endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000;
    alert(`The Virtual pet Survived hunger for ${duration.toFixed(2)} seconds. Please feed it More!`);
}

// Call the food function every 3000 milliseconds
const updateInterval = setInterval(food, 3000);

// Function to reduce the food status over time
function reduceTimeFood() {
    feelings.food -= decRate;
    feelings.food = Math.max(0, feelings.food);
    feelings.food = Math.min(100, feelings.food);
    handleFoodMeter();
}

// Function to update the food meter
function handleFoodMeter() {
    document.querySelector("#foodMeter").value = feelings.food;
}

// Get the food button element and attach the food function to it
const buttonFood = document.querySelector("#foodButton");
buttonFood.addEventListener('click', food);

// Call reduceTimeFood every 500 milliseconds
setInterval(reduceTimeFood, 500);

// Sleep Section
function energy() {
    if (feelings.energy >= 100) {
        return;
    }
    feelings.energy += 1;
}

// Function to reduce the energy status over time
function reduceTimeEnergy() {
    feelings.energy -= decRate;
    feelings.energy = Math.max(0, feelings.energy);
    feelings.energy = Math.min(100, feelings.energy);
    handleEnergyMeter();
}

// Function to update the energy meter
function handleEnergyMeter() {
    document.querySelector("#energyMeter").value = feelings.energy;
}

// Get the sleep button element and attach the energy function to it
const buttonSleep = document.querySelector("#sleepButton");
buttonSleep.addEventListener('click', energy);

// Call reduceTimeEnergy every 1000 milliseconds
setInterval(reduceTimeEnergy, 1000);

// Function to control the eye for sleeping
function toggleSleepMode() {
    sleepMode = !sleepMode;

    const eyesElement = document.querySelector("#eyes");

    if (sleepMode) {
        eyesElement.classList.add('closed');
        eyesElement.style.animationDuration = '60s';
        eyesElement.style.animationPlayState = 'paused';
    } else {
        eyesElement.classList.remove('closed');
        eyesElement.style.animationDuration = '30s';
        eyesElement.style.animationPlayState = 'running';
    }
}

// Get the eyes element and add event listener for sleep mode
buttonSleep.addEventListener('click', toggleSleepMode);

// Call the toggleSleepMode function to initialize sleep mode
toggleSleepMode();

// Happy section
function happy() {
    feelings.happy = (feelings.energy * 0.25) + (feelings.clean * 0.25) + (feelings.food * 0.50);
    document.querySelector("#happyMeter").value = feelings.happy;
}

// Call the happy function to initialize the happy meter
happy();
