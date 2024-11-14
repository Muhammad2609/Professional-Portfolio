document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event triggered");

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

  // Typing Effect Initialization
  const phrases = [
    "Results-driven problem solver",
    "Proactive and innovative",
    "Skilled in programming & development",
    "Problem Solver",
    "Passionate about learning",
    "Cloud computing expert",
    "Quality-focused developer",
    "Collaborative team player",
    "Award-winning achiever"
  ];
  let i = 0;

  function displayPhrase() {
    const typingEffectElement = document.querySelector('.typing-effect');
    if (typingEffectElement) {
      typingEffectElement.innerHTML = phrases[i];
      i = (i + 1) % phrases.length;
      setTimeout(displayPhrase, 3000);
    } else {
      console.error("Typing effect element not found");
    }
  }

  displayPhrase();

  // Updated Read More Functionality for Multiple Projects
  window.toggleDescription = function(projectNumber) {
    const shortDescription = document.getElementById(`short-description-${projectNumber}`);
    const fullDescription = document.getElementById(`full-description-${projectNumber}`);
    const readMoreBtn = document.getElementById(`read-more-btn-${projectNumber}`);
  
    if (fullDescription.classList.contains("hidden")) {
      fullDescription.classList.remove("hidden");
      shortDescription.style.display = "none";
      readMoreBtn.textContent = "Read Less"; // Update button text to "Read Less"
      console.log(`Button text changed to "Read Less" for project ${projectNumber}`);
    } else {
      fullDescription.classList.add("hidden");
      shortDescription.style.display = "block";
      readMoreBtn.textContent = "Read More"; // Update button text to "Read More"
      console.log(`Button text changed to "Read More" for project ${projectNumber}`);
    }
  };
});
