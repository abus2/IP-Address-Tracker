const apiKey = "YOUR_API_KEY"; // Replace with your IP geolocation API key
const apiUrl = "https://ipapi.co"; // Base URL for the IP API

document.getElementById("track-btn").addEventListener("click", function () {
    const ipInput = document.getElementById("ip-input").value.trim();
    const errorMessage = document.getElementById("error-message");
    const results = document.getElementById("results");

    // Clear previous results and errors
    results.innerHTML = "";
    errorMessage.textContent = "";

    if (!ipInput) {
        errorMessage.textContent = "Please enter a valid IP address or domain name.";
        return;
    }

    // Fetch IP details from the API
    fetch(`${apiUrl}/${ipInput}/json/`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch IP details.");
            }
            return response.json();
        })
        .then((data) => {
            if (data.error) {
                errorMessage.textContent = data.reason || "Could not retrieve IP details.";
                return;
            }

            // Display results
            results.innerHTML = `
                <h2>IP Details</h2>
                <p><strong>IP Address:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country_name}</p>
                <p><strong>ISP:</strong> ${data.org}</p>
                <p><strong>Latitude:</strong> ${data.latitude}</p>
                <p><strong>Longitude:</strong> ${data.longitude}</p>
            `;
        })
        .catch((error) => {
            errorMessage.textContent = "An error occurred. Please try again.";
            console.error(error);
        });
});


// Add interactivity to the feature cards (e.g., show alert on click)
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card) => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        alert(`Learn more about: ${title}`);
    });
});





// scripts.js

// Event Listener for "Get Started" Button - Free Plan
document.querySelector('.free .cta-btn').addEventListener('click', function() {
    alert('You have selected the Free Plan!');
  });
  
  // Event Listener for "Subscribe" Button - Pro Plan
  document.querySelector('.pro .cta-btn').addEventListener('click', function() {
    alert('You have subscribed to the Pro Plan!');
  });
  
  // Event Listener for "Contact Sales" Button - Enterprise Plan
  document.querySelector('.enterprise .cta-btn').addEventListener('click', function() {
    alert('Contacting Sales for Enterprise Plan...');
  });
  


  function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}




// Function to fetch the user's IP address using a public API (ipinfo.io)
function getUserIP() {
    fetch('https://ipinfo.io?token=YOUR_API_TOKEN')  // Replace with your token from ipinfo.io
      .then(response => response.json())
      .then(data => {
        const ipInfo = data.ip;
        const city = data.city;
        const country = data.country;
        const region = data.region;

        // Displaying the IP info on the page
        document.getElementById('ip-info').innerHTML = `Your IP: ${ipInfo}, ${city}, ${region}, ${country}`;
      })
      .catch(error => {
        console.error('Error fetching IP info:', error);
        document.getElementById('ip-info').innerHTML = 'Unable to fetch IP information.';
      });
  }

  // Function to handle CTA button click
  function handleCTAButtonClick() {
    alert('Thanks for clicking! You will now be redirected to the Tracking page.');
    window.location.href = "index1.html"; // Redirect to signup page (update URL)
  }

  // Call the getUserIP function when the page loads
  window.onload = function() {
    getUserIP();
  };


  // script.js
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Check if dark mode was previously set
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
    }
  
    // Theme toggle event
    toggleButton.addEventListener("click", function() {
      body.classList.toggle("dark");
      
      // Save the theme in localStorage
      if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  

