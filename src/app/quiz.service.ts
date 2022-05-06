import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [
    {
      question: 'What?',
      answer: [
        { option: 'Look', correct:true},
        { option: 'Where', correct:false},

      ]

    },
    {
      question: 'How?',
      answer: [
        { option: 'Look', correct:true},
        { option: 'Where', correct:false},

      ]

    },
    {
      question: 'When?',
      answer: [
        { option: 'Look', correct:true},
        { option: 'Where', correct:false},

      ]

    },
    {
      question: 'Chicken?',
      answer: [
        { option: 'Look', correct:true},
        { option: 'Where', correct:false},

      ]

    }

  ]


  constructor() { }

  getQuiz(){
    return this.quizzes
  }
}
