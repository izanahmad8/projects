const quizData = [
    {
        question : ' _________ keyword is used to declare variables in javascript.',
        a : 'var',
        b : 'let',
        c : 'variable',
        d : 'Both a and b ',
        correct : 'd'
    }, {
        question : 'Identify the incorrect HTML tag among the following',
        a : '<input>',
        b : '<list>',
        c : '<textarea>',
        d : '<select>',
        correct : 'b',
    }, {
        question : 'How many sizes of headers are available in HTML by default?',
        a : '5',
        b : '1',
        c : '6',
        d : '3',
        correct : 'c',
    }, {
        question : 'Which of the following properties is used to change the font of text?',
        a : 'font-family',
        b : 'font-weight',
        c : 'font-style',
        d : 'font-size',
        correct : 'a',
    }, {
        question : 'The full form of DOM is?',
        a : 'document oriented memory',
        b : 'document object model',
        c : 'document opac model',
        d : 'distroyed oriented memory',
        correct : 'b',
    }, { 
        question : 'The full form of CSS is?',
        a : 'casting-cough style sheets',
        b : 'camel-cone style shows',
        c : 'concatinate -casting style sheets',
        d : 'cascading style sheets',
        correct : 'd',
    }
]
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
 deselectAnswer();
 const currentData = quizData[currentQuestion];
 questionEl.innerText = currentData.question;
 a_text.innerText = currentData.a;
 b_text.innerText = currentData.b;
 c_text.innerText = currentData.c;
 d_text.innerText = currentData.d;
}
function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer;
}
function deselectAnswer(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}
submitbtn.addEventListener('click',() =>{
    const answer = getSelected();
    if(answer){
        if(answer == quizData[currentQuestion].correct)
        {
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answered correctly ${score} / ${quizData.length} questions</h2> <button onClick = "location.reload()">Reload</button>`;
        }
    }
})