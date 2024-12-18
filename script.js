// Function to display the football fact
function displayFact(response) {
  let fact = response.data.answer; // Extract the football fact from the API response
  let outputDiv = document.querySelector("#output");

  // Use Typewriter effect to display the fact dynamically
  new Typewriter(outputDiv, {
    strings: [fact], // Display the fact text
    autoStart: true, // Start typing immediately
    cursor: "", // Remove the cursor effect
    delay: 50, // Typing speed
  });
}

// Enable the submit button
let submitButton = document.querySelector("#submit-btn");
submitButton.removeAttribute("disabled");

function displayDefaultFootballInfo() {
  let footballInfo = `Football is the most popular sport in the world, played by over 250 million people in 200+ countries.<br />
    Lionel Messi and Cristiano Ronaldo are two of the greatest players, with countless records between them.<br />
    Clubs like Barcelona, Chelsea, Arsenal, Man united, Bayern Munich, Borussia Dortmund, and Real Madrid have a massive fan base spanning continents.<br />
    <strong>SheCodes AI Football Generator</strong>`;

  let outputDiv = document.querySelector("#output");

  new Typewriter(outputDiv, {
    strings: [footballInfo],
    autoStart: true,
    delay: 50,
  });
}

// API setup
function generate(event) {
  event.preventDefault();

  let apiKey = "boc9a5a07045b413df4e1ab63536ctf0";

  let context = `You are an AI Football Generator that provides short, concise, engaging,
    fascinating football-related 
    facts, stats, and insights. Your mission is to generate 5 line answer, concise, 
    inspiring and engaging football content formatted in basic HTML, 
    with each line separated by a <br />. Remove irrelevant information and just keep it simple, 
    short, concise and inspiring.
    Make sure to follow the user instructions. 
    Do not include a title in the content. 
    Sign off the section with 'SheCodes AI Football Generator' 
    inside a <strong> element at the bottom of the text.`;

  let userInput = document.querySelector("#user-input");

  let prompt = `User instructions: Generate exciting football content about ${userInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${encodeURIComponent(
    context
  )}&prompt=${encodeURIComponent(prompt)}&key=${apiKey}`;

  // Disable the submit button while processing
  submitButton.setAttribute("disabled", "disabled");

  let footballElement = document.querySelector("#output");
  footballElement.classList.remove("hidden");
  footballElement.innerHTML = `<div class="waiting">⏳ Generating football fact about ${userInput.value}...</div>`;

  // API call
  axios
    .get(apiUrl)
    .then(displayFact)

    .finally(() => {
      submitButton.removeAttribute("disabled"); // Re-enable the submit button
    });
}

// Add event listener for form submission
let footballForm = document.querySelector("#football-generator");
footballForm.addEventListener("submit", generate);

// Call the displayFootball function
displayDefaultFootballInfo();
