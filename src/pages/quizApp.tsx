import React,{useState} from 'react';
import { fetchQuizQuestions } from '../Api';
//components
import QuestionCard from '../components/QuestionCard';
//types
import { QuestionState,Difficulty } from '../Api';
//styles
import'../App.css'

export type AnswerObject = {
  question : string;
  answer:string;
  correct: boolean;
  correctAnswer: string;
} 


const TOTAL_QUESTIONS = 50;
const QuizApp =()=> {
  const [Loading, setLoading]= useState(false);
  const [questions, setQuestions]= useState<QuestionState[]>([]);
  const [number, setNumber]= useState(0);
  const [userAnswers, setUserAnswers]=useState<AnswerObject[]>([]);
  const [score, setScore]=useState(0);
  const [quizOver, setQuizOver]=useState(true)

  


  const startQuiz = async() =>{
    setLoading(true);
    setQuizOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0);
    setLoading(false)

  }


  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{
    if(!quizOver){
      //users answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer
      //add score if answer is correct 
      if(correct) setScore(prev => prev+1);
      //save answer in the array for user answer
      const answerObject ={
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev,answerObject])
    }

  };

  const nextQuestion = ()=>{
    //move on to the next question if not the last question
    const nextQuestion = number +1;

    if(nextQuestion=== TOTAL_QUESTIONS){
      setQuizOver(true)
    }else{
      setNumber(nextQuestion);
    }

  }
  return (
    <>
    {/* <GlobalStyle/> */}
    <div className="App">
      <h1>Quiz-App</h1>
      {quizOver || userAnswers.length === TOTAL_QUESTIONS ?(
      <button className="start" onClick={startQuiz}>
        start
      </button>
      ):null}
      {!quizOver ? <p className='score'>score:{score}</p>: null }
      {Loading && <p>Loading Questions ......</p>}
      {!Loading && !quizOver && (
      < QuestionCard
      questionNr={number +1}
      totalQuestion={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]: undefined}
      callback={checkAnswer}
      />
      )}
      {!quizOver &&
       !Loading && 
       userAnswers.length === number + 1 &&
       number !== TOTAL_QUESTIONS -1? (
        <button className='next' onClick={nextQuestion}>
          next Question
        </button>
      ):null}
      </div>
      </>
  );
}

export default QuizApp;
