function checkAnswer() {
    // Declare a variable for the correct answer
    const correctAnswer = "4";

    // Retrieve the user’s answer using querySelector
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedChoice ? selectedChoice.value : null;

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if an answer was selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer); // No parentheses here