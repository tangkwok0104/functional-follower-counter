let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

//check the value of count and trigger alerts when specific follower milestones
function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

// Function to reset the follower count
function resetCount() {
    count = 0; // Reset the count
    document.getElementById('countDisplay').textContent = count; // Update the display
    alert("Followers count has been reset."); // Alert message for reset
}

  function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

