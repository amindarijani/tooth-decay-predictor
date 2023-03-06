  var outcome = Math.random() < 0.5 ? "low risk" : "high risk";
  var category = outcome == "low risk" ? "good" : "bad";

  // Display outcome and category
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Outcome: " + outcome + "<br>Category: " + category;
}
