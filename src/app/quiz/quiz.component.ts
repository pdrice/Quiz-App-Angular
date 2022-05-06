import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

quizzes: Quiz[]=[]
currentQuiz = 0;
answerSelected=false;
correctAnswer=0;
incorrectAnswer=0;

result = false;
randomize:number;



  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuiz();
    this.randomize = Math.floor(Math.random()* this.quizzes.length)
  }

  onAnswer(correct:boolean){
    this.answerSelected =true;

    
    setTimeout(()=>{
      this.currentQuiz++;
      this.randomize = Math.floor(Math.random()* this.quizzes.length)
      this.answerSelected =false;
    }, 800)
    
    if(correct){
      this.correctAnswer++;
    }else{
      this.incorrectAnswer++;
    }
  }

   clickShowResults(){
    this.result =true
  }

  clickStartOver(){
    window.location.reload();
  }

}
