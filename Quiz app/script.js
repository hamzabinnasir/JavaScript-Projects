// QUESTIONS
const questions = [
    {
        question: " Whish is the largest animal in the world ",
        answer: [
            { text: " Shark ", correct: false },
            { text: " Blue whale ", correct: true },
            { text: " Elephent ", correct: false },
            { text: " Giraffe ", correct: false },
        ]
    },

    {
        question: " Whish is the smallest country in the world ",
        answer: [
            { text: " Vatican City ", correct: true },
            { text: " Bhutan ", correct: false },
            { text: " Nepal ", correct: false },
            { text: " Shri Lanka ", correct: false },
        ]
    },

    {
        question: " Whish is the largest desert in the world ",
        answer: [
            { text: " Kalahari ", correct: false },
            { text: " Gobi ", correct: false },
            { text: " Sahara ", correct: false },
            { text: " Antarctica ", correct: true },
        ]
    },

    {
        question: " Whish is the smallest continent in the world ",
        answer: [
            { text: " Asia ", correct: false },
            { text: " Australia ", correct: true },
            { text: " Arctic ", correct: false },
            { text: " Africa ", correct: false },
        ]
    },
]


// FETCHING THE BUTTONS AND HEADINGS ON WHICH THE JAVA SCRIPT IS GOING TO PERFORM
const question = document.querySelector("#question");
const nextBtn = document.querySelector("#next-btn");
const answerBtn = document.querySelector(".answer");



// EMBEDDING QUESTIONS AND ALL ITS FUNCTIONALITY
let score = 0;
let currentQuestionIdx = 0;

const startQuiz = () =>{
    score = 0;
    currentQuestionIdx = 0;
    nextBtn.innerHTML = "Next";
    showQuiz();
}

const showQuiz = () =>{
    resetState();
    let curentQuestion = questions[currentQuestionIdx];
    let questionNo = currentQuestionIdx + 1;
    question.innerHTML = questionNo + "." + curentQuestion.question;

    curentQuestion.answer.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("ans-btn")
        answerBtn.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click" , selectAnswer)
    });
}


const resetState = () =>{
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}


const selectAnswer = (e) =>{
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";

}




// NEXT BUTTON JAVA SCRIPT
const showScore = () =>{
    resetState();
    question.innerHTML = ` You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}


const handleNextBtn = () =>{
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length){
        showQuiz();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click" , ()=>{
    if(currentQuestionIdx < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})


showQuiz();







