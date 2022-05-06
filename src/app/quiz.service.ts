import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [
    {
      question: 'What is the trough?',
      answer: [
        { option: 'The bottom of a wave.', correct:true},
        { option: 'The top of a wave.', correct:false},

      ]

    },
    {
      question: 'What is the creast of a wave?',
      answer: [
        { option: 'The bottom of a wave', correct:false},
        { option: 'The top of a wave', correct:true},

      ]

    },
    {
      question: 'What is the wavelength of a wave?',
      answer: [
        { option: 'Distance between two adjacent corresponding locations on a wave train', correct:true},
        { option: 'The cycles per minute of a wave', correct:false},

      ]

    },
    {
      question: 'What are Hertz?',
      answer: [
        { option: 'One complete positive and nagative roation of a wave', correct:false},
        { option: 'Cycles Per Second', correct:true},

      ]

    },
    {
      question: 'What a cycle?',
      answer: [
        { option: 'One complete positive and nagative roation of a wave', correct:true},
        { option: 'Cycles Per Second', correct:false},

      ]

    },
    {
      question: 'What is frequency?',
      answer: [
        { option: 'One complete positive and negative roation of a wave.', correct:false},
        { option: 'The number of complete cycles of a wave occuring per second.', correct:true},

      ]

    },
    {
      question: 'What is another name for smooth repetivie oscillation?',
      answer: [
        { option: 'A Sine Wave', correct:true},
        { option: 'A Phase', correct:false},

      ]

    },
    {
      question: 'What is oscillation?',
      answer: [
        { option: 'Movement back and forth.', correct:true},
        { option: 'Distance a wave travels above and below a rest state.', correct:false},

      ]

    },
    {
      question: 'What is amplitude?',
      answer: [
        { option: 'Movement back and forth.', correct:false},
        { option: 'Distance a wave travels above and below a rest state.', correct:true},

      ]

    },
    {
      question: 'What is a sine wave ?',
      answer: [
        { option: 'A frequency free of distortion and other components.', correct:true},
        { option: 'Distance a wave travels above and below a rest state.', correct:false},

      ]

    },
    {
      question: 'What is a doppler effect or doppler shift ?',
      answer: [
        { option: 'A  change in frequency of a wave for an observer moving relative to the sound of a wave.', correct:true},
        { option: 'a range of frequencies.', correct:false},

      ]

    },
    {
      question: 'What is summing ?',
      answer: [
        { option: 'A  change in frequency of a wave for an observer moving relative to the sound of a wave.', correct:false},
        { option: 'When two waves are added to each other', correct:true},

      ]

    },
    {
      question: 'How do you calculate the frequency of a wave?',
      answer: [
        { option: 'Get the time or frequency and divide it by 1', correct:true},
        { option: 'Subtract the phase of the wave with the sine wave', correct:false},

      ]

    },
    {
      question: 'What are giga-hertz?',
      answer: [
        { option: '1 billion cycles per second', correct:true},
        { option: '1 million cycles per second', correct:false},

      ]

    },
    {
      question: 'What are mega-hertz?',
      answer: [
        { option: '1 billion cycles per second', correct:false},
        { option: '1 million cycles per second', correct:true},

      ]

    },
    {
      question: 'Why do we care about doppler effects?',
      answer: [
        { option: 'To pin point a specific signal', correct:true},
        { option: 'To listen to the frequency', correct:false},

      ]

    },
    {
      question: 'What is latency?',
      answer: [
        { option: 'How strong the wave is when you see it', correct:false},
        { option: 'A measure of time delay expereince in a system', correct:true},

      ]

    },
    {
      question: 'How do you measure latency?',
      answer: [
        { option: 'By dividing the distance by the rate of propagation', correct:true},
        { option: 'To listen to the frequency', correct:false},

      ]

    },
    {
      question: 'What is digital modulation?',
      answer: [
        { option: 'Process of turning a digital signal into a physical signal', correct:true},
        { option: 'Process of understanding why analog signals are being used', correct:false},

      ]

    },
    {
      question: 'What is analog?',
      answer: [
        { option: 'Real life', correct:true},
        { option: 'Digital life', correct:false},

      ]

    },
    {
      question: 'What is modulation?',
      answer: [
        { option: 'The process of varying one waveform in relation to another or changing one signal to another', correct:true},
        { option: 'A communication signal that encodes discreatly', correct:false},

      ]

    },
    {
      question: 'What is bit-stream?',
      answer: [
        { option: 'A channel coding network', correct:true},
        { option: 'A communication signal that is encoded discreatly.', correct:true},

      ]

    },
    {
      question: 'What is (FEC) Forward error correction?',
      answer: [
        { option: 'A technique use for controlling errors in data transmission over unreliable or noisy communication channels', correct:true},
        { option: 'A communication signal that is encoded discreatly.', correct:true},

      ]

    },

  ]


  constructor() { }

  getQuiz(){
    return this.quizzes
  }
}
