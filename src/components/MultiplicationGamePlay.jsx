import { useState, useEffect } from "react";
import { increaseScore, decreaseScore, setTimer, countQuestion, start, end, resetTimer, resetTable, resetScore} from "../features/multiplicationGameSlice";
import { useDispatch, useSelector } from 'react-redux';
import Section from "./Section";
import Heading from "./Heading";
import { BackgroundCircles } from "./design/Hero";
import Modal from "./Modal";



const MultiplicationGamePlay = () => {
    const enteredTable = useSelector((state) => state.multiplicationGame.enteredTable)
    const [inputOne, setInputOne] = useState(enteredTable);
    const [inputTwo, setInputTwo] = useState(1);
    const [response, setResponse] = useState("");
    
    const dispatch = useDispatch()
    const questionCounter = useSelector((state) => state.multiplicationGame.questionCounter)
    
    const timer = useSelector((state) => state.multiplicationGame.timer);
    const [gameTimer, setGameTimer] = useState(timer)

    const score = useSelector((state) => state.multiplicationGame.score)
    
    const updateResponse = (event) => {
        setResponse(event.target.value);
      };
    
      const inputKeyPress = (event) => {
        if (event.key === "Enter") {
          const answer = parseInt(response);
          if (answer === inputOne * inputTwo) {
            //Answer is correct
            dispatch(increaseScore());
            let newInput = Math.ceil(Math.random() * enteredTable)
            if (newInput === 1) {newInput = 2}
            setInputOne(newInput);
            setInputTwo(Math.ceil(Math.random() * 12));
            dispatch(countQuestion());
            setResponse("");
          } else {
            //Answer is wrong
            dispatch(decreaseScore());
            setResponse("");
          }
        }
      };
    
    useEffect(() => {
        
        //timer for quiz - when timer reaches 0 "end screen" appears
        const timeOut = gameTimer > 0 && setInterval(() => setGameTimer(gameTimer - 1), 1000);
        if (Number(timeOut) === 0) {
            dispatch(end());
            dispatch(resetTimer())
            dispatch(resetTable())
        }
        return () => clearInterval(timeOut);
    }, [gameTimer, dispatch]);

    

    //restart quiz - go back to main screen, set score to 0 and counter to 60 seconds
    const restartQuiz = () => {
        dispatch(start());
        dispatch(setTimer(60));
        dispatch(resetTable())
        dispatch(resetScore())
    }


  return (
    <Section id="multiplicationGame">
    <div className="container">
      <Heading
        title="Multiplication Game"
        text="Type answer in the input field and then press 'enter'"
      />
         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] text-center overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] mt-12 lg:dvh">
                
                <h4 className="h4">Score: {score}</h4>
                <h4 className="h4">Time: {gameTimer}s</h4>
                <h4 className="h4">Question: {questionCounter}</h4>
                <h1 className="h1 py-4 lg:py-8">{inputOne} &times; {inputTwo}</h1>
                <p>
                    <input 
                        className="rounded-md border-2 border-teal-100 py-1 text-center"
                        type='number'
                        onKeyDown={inputKeyPress}
                        onChange={updateResponse}
                        value={response}  
                        placeholder='Enter answer'
                        autoFocus
                    />
                </p>
                <div className="mt-10">
                <Modal reStart={restartQuiz}/>
                </div> 
              </div>
            </div>
          </div>
         
          <BackgroundCircles />
        </div>
          
    </div>
  </Section>
  )
}

export default MultiplicationGamePlay