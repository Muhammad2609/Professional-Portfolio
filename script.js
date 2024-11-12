// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Load Navbar
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));

  // Load Footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});


// JavaScript for Phrase-by-Phrase Typing Effect
const phrases = ["Results-driven problem solver", "Proactive and innovative", "Skilled in programming & development", "Problem Solver", "Passionate about learning", "Cloud computing expert", "Quality-focused developer", "Collaborative team player", "Award-winning achiever"];
let i = 0;

function displayPhrase() {
  const typingEffectElement = document.querySelector('.typing-effect');

  // Display the current phrase
  typingEffectElement.innerHTML = phrases[i];
  
  // Move to the next phrase, or reset to the first phrase if at the end
  i = (i + 1) % phrases.length;

  // Set a delay of 3 seconds to allow each phrase to stay visible
  setTimeout(displayPhrase, 3000); // 3 seconds delay between phrases
}

// Start the typing effect loop
displayPhrase();

