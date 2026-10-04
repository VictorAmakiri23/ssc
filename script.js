const inputs = document.querySelectorAll(".score");

inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    let value = Number(input.value);

    // Limit CA scores to 10
    if (input.classList.contains("ca") && value > 10) {
      input.value = 10;
    }

    // Limit Exam score to 70
    if (input.classList.contains("exam") && value > 70) {
      input.value = 70;
    }

    // Prevent negative scores
    if (value < 0) {
      input.value = 0;
    }

    const row = input.closest("tr");
    const scores = row.querySelectorAll(".score");

    let total = 0;

    scores.forEach(function (score) {
      total += Number(score.value);
    });

    row.querySelector(".total").textContent = total;

    let grade;

    if (total >= 70) {
      grade = "A";
    } else if (total >= 60) {
      grade = "B";
    } else if (total >= 50) {
      grade = "C";
    } else if (total >= 45) {
      grade = "D";
    } else if (total >= 40) {
      grade = "E";
    } else {
      grade = "F";
    }

    row.querySelector(".grade").textContent = grade;
  });
});
