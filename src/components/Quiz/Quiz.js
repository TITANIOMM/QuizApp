import React from "react";
import "./Quiz.css"


export default class Quiz extends React.Component {
    constructor(props){
        super(props)

        
        this.state = {
            questions : [
                {
                    questionText : 'What is the capital of Spain?',
                    answerOptions :[
                        {answerText : 'NYC' , isCorrect : false},
                        {answerText : 'Madrid' , isCorrect : true},
                        {answerText : 'Tokyo' , isCorrect : false},
                        {answerText : 'Baku' , isCorrect : false},

                    ]
                },
                {
                    questionText : 'Who is CEO of Tesla?',
                    answerOptions :[
                        {answerText : 'Jeff Bezos' , isCorrect : false},
                        {answerText : 'Elon Musk' , isCorrect : true},
                        {answerText : 'Bill Gates' , isCorrect : false},
                        {answerText : 'Toney Stark' , isCorrect : false},

                    ],
                },
                {
                    questionText : "the iphone created by which company?",
                    answerOptions : [
                        {answerText : 'Apple' , isCorrect : true},
                        {answerText : 'Intel' , isCorrect : false},
                        {answerText : 'Amazon' , isCorrect : false},
                        {answerText : 'Microsoft' , isCorrect : false},
                        
                    ],
                },
                {
                    questionText : "How many UCL does AC Milan have?",
                    answerOptions : [
                        {answerText : '7' , isCorrect : true},
                        {answerText : '5' , isCorrect : false},
                        {answerText : '6' , isCorrect : false},
                        {answerText : '3' , isCorrect : false},
                        
                    ],
                }

            ],
            currentQuestion : 0 ,
            showScore : false , 
            score : 0
        }
    
    }
    render (){
        return (
            <div className="app">
                <div className="score-section"></div>
                <div className="question-section">
                    <div className="question-count">
                        <span>Question 1</span>/4
                    </div>
                    <div className="question-text"></div>

                </div>
                <div className="answer-section">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        )
    }
    
}