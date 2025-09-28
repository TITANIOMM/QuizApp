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
                
            ]
        }
    
    }
    
}