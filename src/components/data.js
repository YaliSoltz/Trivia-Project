class Question {
    constructor(q,a1True,a2False,a3False,a4False){
        {
            this.questionText = q,
            this.answerOptions = [
                {answerText: a1True, isCorrect: true},
                {answerText: a2False, isCorrect: false},
                {answerText: a3False, isCorrect: false},
                {answerText: a4False, isCorrect: false},
            ]};
    }
};

const q1 = new Question('What is the capital of Israel?', 'Jerusalem', 'Haifa', 'Tel-Aviv', 'Hadera')
const q2 = new Question('What is the capital of Spain?', 'Madrid', 'Barcelona', 'New York', 'Paris')

const  questions = [q1,q2]



