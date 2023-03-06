const predictButton = document

// Define a function that takes in patient information as arguments and returns a prediction of their likelihood of tooth decay
function predictToothDecay(age, sugarIntake, brushingFrequency) {
  // Define weightings for each factor (age, sugar intake, brushing frequency)
  const ageWeight = 0.2;
  const sugarIntakeWeight = 0.5;
  const brushingFrequencyWeight = 0.3;

  // Calculate a score based on the patient information and weightings
  const score = age * ageWeight + sugarIntake * sugarIntakeWeight + brushingFrequency * brushingFrequencyWeight;

  // Define a threshold score above which the patient is predicted to have tooth decay
  const thresholdScore = 5;

  // If the patient's score is above the threshold, return a prediction of tooth decay
  if (score >= thresholdScore) {
    return "You may be at risk of tooth decay. Please consult your dentist for advice.";
  } else {
    return "You are not currently at risk of tooth decay. Keep up the good work!";
  }
}

// Example usage
console.log(predictToothDecay(30, 10, 2)); // Expected output: "You may be at risk of tooth decay. Please consult your dentist for advice."
console.log(predictToothDecay(25, 5, 3)); // Expected output: "You are not currently at risk of tooth decay. Keep up the good work!"
