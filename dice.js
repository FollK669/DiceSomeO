// JavaScript source code

var standPlayer1 = 0;
var standPlayer2 = 0;
var standgelijkspel = 0;
var voorN = "player 1";
var achterN = "player 2";
var standPlayer1 = 0;
var standPlayer2 = 0;
var standgelijkspel = 0;




// Event listener to call the function when the form is submitted



function processNames() {
    // Get the values of the first and second names
    voorN = document.getElementById("voorN");
    achterN = document.getElementById("achterN");

    const firstName = document.getElementById('firstName').value;
    const secondName = document.getElementById('secondName').value;

    voorN.textContent = firstName;
    achterN.textContent = secondName;

    // Do something with the names (e.g., display them)
    alert("First name: " + firstName + "\nSecond name: " + secondName);

    standwinner();
}



function randomizeImage() {

    var img = document.getElementById("myImg");

    // Eerst verkleinen


    // Wacht 1 seconde voordat we teruggaan naar de oorspronkelijke grootte
    setTimeout(function () {
        // Terug naar de oorspronkelijke grootte
        img.style.transform = "scale(0.5)";
    }, 3000); // 1000 milliseconden = 1 seconde
    setTimeout(function () {
        // Terug naar de oorspronkelijke grootte
        img.style.transform = "scale(1.5)";
    }, 3000);
    setTimeout(function () {
        // Terug naar de oorspronkelijke grootte
        img.style.transform = "scale(1)";
    }, 3000);


    // Willekeurig nummer tussen 1 en 6 genereren
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // De URL van de afbeelding bepalen op basis van het willekeurige nummer
    var imageUrl = './images/dice' + randomNumber + '.png';
    var imageUrl2 = './images/dice' + randomNumber2 + '.png';

    voorN = document.getElementById("voorN");
    achterN = document.getElementById("achterN");
    //winnaar bepalen, alle elementen met ID result1 krijgen een nieuwe textcontent, afhankelijk van de uitkomst.
    var resultElement1 = document.getElementById("result1");

    if (randomNumber > randomNumber2) {

        resultElement1.textContent = voorN.textContent + " wint deze ronde";
        standPlayer1 = standPlayer1 + 1;
    }
    else if (randomNumber < randomNumber2) {

        resultElement1.textContent = achterN.textContent + " wint deze ronde ";
        standPlayer2 = standPlayer2 + 1;
    }
    else {

        resultElement1.textContent = "Gelijkspel!";
        standgelijkspel = standgelijkspel + 1;
    }

    var standElement = document.getElementById("stand1");
    standElement.textContent =
        "Huidige stand voor " + voorN.textContent + " is " + standPlayer1 + "\n"
        +
        " Huidige stand voor " + achterN.textContent + " is " + standPlayer2 + "\n"

        +
        " \n Er waren " + standgelijkspel + " gelijkstanden";

    //url voor alle image elementen
    var img = document.createElement('img');
    img.src = imageUrl

    var img2 = document.createElement('img');
    img2.src = imageUrl2;

    // De afbeelding toevoegen aan de container in de HTML
    var container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Verwijder vorige afbeelding
    container.appendChild(img);

    var container2 = document.getElementById('imageContainer2');
    container2.innerHTML = ''; // Verwijder vorige afbeelding
    container2.appendChild(img2);


    standwinner();
}

function standwinner() {
    voorN = document.getElementById("voorN");
    achterN = document.getElementById("achterN");
    var standtotter = document.getElementById('standTOT');

    if (standPlayer1 > standPlayer2) { standtotter.textContent = voorN.textContent + " heeft de leiding. " }
    else if (standPlayer1 < standPlayer2) { standtotter.textContent = achterN.textContent + " heeft de leiding. " }
    else { standtotter.textContent = "Gelijkspel " }
}


// Event listener to call the function when the form is submitted
document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    processNames(); // Call the function to process the names
});

//10x herhalen
function randomizeImageRep() {
    for (var i = 0; i < 11; i++) {
        randomizeImage();
    }


}


//100x herhalen
function randomizeImageRep100() {
    for (var i = 0; i < 101; i++) {
        randomizeImage();
    }


}

//een miljoenkeer text
function randomizeImageRep1000() {
    var standElement = document.getElementById("stand1");
    standElement.textContent = "iemand heeft tijd teveel...";



}

document.getElementById('rollButton').addEventListener('click', function () {
    var die = document.getElementById('die');
    die.innerHTML = ''; // Clear previous content
    var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    var imagePath = './images/dice' + randomNumber + '.png'; // Assuming your images are named dice1.png, dice2.png, ..., dice6.png
    var image = document.createElement('img');
    image.src = imagePath;
    die.appendChild(image);
});





