import React, { useState, useEffect } from 'react';
import { increaseScore, decreaseScore, setTimer, countQuestion, start, end, resetTimer, resetGameLevel, resetScore} from "../../features/arithmeticGameSlice"
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import Section from '../Section';
import Heading from '../Heading';
import { BackgroundCircles } from "../design/Hero";

const ArithmeticGamePlay = () => {
    const [inputOne, setInputOne] = useState(3);
    const [inputTwo, setInputTwo] = useState(1);
    const [inputThree, setInputThree] = useState(1);
    const [inputFour, setInputFour] = useState(2);
    const [inputFive, setInputFive] = useState(1);

    // const [indexOne, setIndexOne] = useState(0);
    // const [indexTwo, setIndexTwo] = useState(0)
    const [response, setResponse] = useState("");

   


    // const mathOperation = ["&plus;", "&minus;", "&times;", "&divide;"]
    // const mathOperator  = ["+", "-", "*", "/"];

    const dispatch = useDispatch()
   
    const questionCounter = useSelector((state) => state.arithmeticGame.questionCounter);
    const selectedLevel = useSelector((state) => state.arithmeticGame.level);
    
    const timer = useSelector((state) => state.arithmeticGame.timer);
    const [gameTimer, setGameTimer] = useState(timer)

    const score = useSelector((state) => state.arithmeticGame.score)
    
    const updateResponse = (event) => {
        setResponse(event.target.value);
      };

    // Generate a random number between 0 and 2
    // const giveMeRandomNum = () => {
    //     return Math.floor(Math.random() * 3)
    // }
    const inputKeyPress = (event) => {
        if (event.key === "Enter") {
            const answer = parseFloat(response);
            
            // setIndexOne(giveMeRandomNum());
            // setIndexTwo(giveMeRandomNum());
            
            let ans;
           

            if (selectedLevel === "basic"){
                if (questionCounter <= 6) {
                    ans = (inputOne + inputTwo).toFixed(1) 
                }
                else if (questionCounter > 6 && questionCounter <= 12){
                    ans = (inputOne - inputTwo).toFixed(1) 
                }
                else if (questionCounter > 12 && questionCounter <= 18){
                    ans = (inputOne * inputTwo).toFixed(1) 
                }
                else{
                    ans = (inputOne / inputTwo).toFixed(1) 
                }
               
            }
            else if (selectedLevel === "moderate"){ 
                if (questionCounter <= 6) {
                    ans = (inputOne + inputTwo - inputThree).toFixed(1)
                }
                else if (questionCounter > 6 && questionCounter <= 12){
                    ans = (inputOne + inputTwo * inputThree).toFixed(1)
                }
                else if (questionCounter > 12 && questionCounter <= 18){
                    ans = (inputOne * inputTwo -  inputThree).toFixed(1) 
                }
                else{
                    ans = (inputOne + inputTwo / inputThree).toFixed(1)
                }

                
                
            }
            else{
                ans = ((inputOne * inputTwo - inputThree) / (inputFour * (inputOne - inputFive) )).toFixed(1)    
            }
            
            
            if (answer.toFixed(1) === ans) {
                //Answer is correct
            dispatch(increaseScore());
            setInputOne(Math.ceil(Math.random() * 5) + inputFive);
            setInputTwo(Math.ceil(Math.random() * 5));
            setInputThree(Math.ceil(Math.random() * 5));
            setInputFour(Math.ceil(Math.random() * 5));
            setInputFive(Math.ceil(Math.random() * 5));
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
            dispatch(resetGameLevel())
        }
        return () => clearInterval(timeOut);
    }, [gameTimer, dispatch]);

    

    //restart quiz - go back to main screen, set score to 0 and counter to 60 seconds
    const restartQuiz = () => {
        dispatch(start());
        dispatch(setTimer(60));
        dispatch(resetGameLevel())
        dispatch(resetScore())
    }



  return (
    <Section crosses id="arithmeticGame">
    <div className="container">
      <Heading
        title="Arithmetic Game"
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
               
                {(selectedLevel==="basic" && questionCounter <= 6 ) &&
            <h1 className="h1 py-4 lg:py-8">{inputOne} &#43; {inputTwo}</h1>
            }

            {(selectedLevel==="basic" && (questionCounter > 6 && questionCounter <= 12)) && 
            <h1 className="h1 py-4 lg:py-8">{inputOne} &minus; {inputTwo}</h1>
            }

            {(selectedLevel==="basic" && (questionCounter > 12 && questionCounter <= 18)) && 
            <h1 className="h1 py-4 lg:py-8">{inputOne} &times; {inputTwo}</h1>
            }

            {(selectedLevel==="basic" &&  questionCounter > 18)&& 
            <h1 className="h1 py-4 lg:py-8">{inputOne} &divide; {inputTwo}</h1>
            }

            {(selectedLevel==="moderate" && questionCounter <= 6) &&
            <h1 className="h1 py-4 lg:py-8">{inputOne} &#43; {inputTwo} &minus; {inputThree}</h1>
            }

            {(selectedLevel==="moderate" && (questionCounter > 6 && questionCounter <= 12)) &&
            <h1 className="h1 py-4 lg:py-8">{inputOne} &#43; {inputTwo} &times; {inputThree}</h1>
            }

            {(selectedLevel==="moderate" && (questionCounter > 12 && questionCounter <= 18)) &&
            <h1 className="h1 py-4 lg:py-8">{inputOne} &times; {inputTwo} &minus; {inputThree}</h1>
            }

            {(selectedLevel==="moderate" &&  questionCounter > 18) &&
            <h1 className="h1 py-4 lg:py-8">{inputOne} &#43; {inputTwo} &divide; {inputThree}</h1>
             }

            {selectedLevel==="challenging" &&
            <h1 className="h1 py-4 lg:py-8">({inputOne} &times; {inputTwo} &minus; {inputThree}) &divide;[ {inputFour}( {inputOne} &minus; {inputFive})]</h1>
            }
          
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

export default ArithmeticGamePlay