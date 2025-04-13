const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "22", "5"],
      answer: "4",
    },
    {
      question: "What is the capital of India",
      options: ["Delhi", "Chandigarh", "Bombay", "Bangalore"],
      answer: "1", 
    }
  ];
  
  let current = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next");
  const resultEl = document.getElementById("result");
  
  function showQuestion() {
    let q = questions[current];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((opt) => {
      let btn = document.createElement("button");
      btn.textContent = opt;
      btn.classList.add("option");
      btn.onclick = () => selectOption(opt);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectOption(selected) {
    let correct = questions[current].answer;
    if (selected === correct) score++;
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      questionEl.style.display = "none";
      optionsEl.style.display = "none";
      nextBtn.style.display = "none";
      resultEl.textContent = `You scored ${score}/${questions.length}!`;
    }
  }
  
  nextBtn.onclick = showQuestion;
  
  showQuestion();
  