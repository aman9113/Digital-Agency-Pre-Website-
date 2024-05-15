
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let currentFeedbackIndex = 0; // Initialize with the first feedback

function showFeedback(direction) {
    const feedbackElements = document.querySelectorAll('.client-feedback');

    // Hide the current feedback
    feedbackElements[currentFeedbackIndex].style.display = 'none';

    // Calculate the new index based on the direction
    if (direction === 'next') {
        currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackElements.length;
    } else if (direction === 'back') {
        currentFeedbackIndex = (currentFeedbackIndex - 1 + feedbackElements.length) % feedbackElements.length;
    }

    // Show the new feedback
    feedbackElements[currentFeedbackIndex].style.display = 'block';
}