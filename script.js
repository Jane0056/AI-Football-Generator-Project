// Function to display the football fact
function displayFact(event) {
  event.preventDefault();

  // Use Typewriter effect to display the joke
  new Typewriter(outputDiv, {
    strings: [fact], // Display the fact text
    autoStart: true, // Start typing immediately
    cursor: "", // Remove the cursor effect
    delay: 50, // Typing speed
  });
}

let footballFormElement = document.querySelector("#football-generator");
// Add click event to the button
footballFormElement.addEventListener("click", displayFact);
