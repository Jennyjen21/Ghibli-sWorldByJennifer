// Questions that will be asked
const Questions = [{
    q: "What was Studio Ghibli's first production?",
    a: [{ text: "Grave of the Fireflies", isCorrect: false },
    { text: "Howl's moving castle", isCorrect: false },
    { text: "Castle in the sky", isCorrect: true },
    { text: "Kiki's delivery service", isCorrect: false }
    ]
 
},
{
    q: "Which actor worked on both a Ghibli production and Star Wars trilogy?",
    a: [{ text: "Mark Richrd Hamill", isCorrect: true, },
    { text: "Christian Bale", isCorrect: false },
    { text: "Liam Neeson", isCorrect: false },
    { text: "Hayao Miyazaki", isCorrect:false }
    ]
 
},
{
    q: "Which Ghibli production was based on the little mermaid?",
    a: [{ text: "Spirited Away", isCorrect: false },
    { text: "Princess Mononoke", isCorrect: false },
    { text: "Ponyo", isCorrect: true },
    { text: "Arrietty", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}