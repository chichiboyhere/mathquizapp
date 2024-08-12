import React, { useEffect, useState } from 'react';
import { slowSpeed, goodSpeed, greatSpeed, setTimer, resetCountQuestion, start, resetGameLevel, resetScore} from "../../features/arithmeticGameSlice"

import { useDispatch, useSelector } from 'react-redux';
import Section from "../Section";
import Heading from '../Heading';
import Button from '../Button';
import studentImage2 from "../../assets/arithmeticGame/studentImage2.png";

const ArithmeticGameEnd = () => {
    const dispatch = useDispatch();
    
    const score = useSelector((state) => state.arithmeticGame.score)
    const questionCounter = useSelector((state) => state.arithmeticGame.questionCounter
)
    const verdict = useSelector((state) => state.arithmeticGame.verdict)
    const timer = useSelector((state) => state.arithmeticGame.timer)
   
   
    

     // This is calculating the user's speed
    const speedCalculator = (marks, timeSpent) => {
    const speed = parseInt(marks) / parseInt(timeSpent);
    return speed.toFixed(2);
  };
  let speed = speedCalculator(parseInt(score), timer);

 
  useEffect(() =>{
    if (speed >= 0.45){
      dispatch(greatSpeed()) 
     
     }
     else if (speed < 0.45 && speed > 0.35){
      dispatch(goodSpeed()) 
      
     }
     else{
      dispatch(slowSpeed())
     }
  },[speed, dispatch]);

  

  //Try again - show main screen, set score back to 0, set counter back to 240 seconds
  const reStart = () => {
    dispatch(resetScore())
    dispatch(setTimer(60));
    dispatch(start());
    dispatch(resetGameLevel())
    dispatch(resetCountQuestion())
}

  return (
    <Section crosses id="arithmeticGame">
        <div className="container">
         <Heading title="Arithmetic Game Result" text="Dear friend, here's how you performed." />
         <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto opacity-30 md:opacity-100">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Student"
                height={730}
                src={studentImage2}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-2">You scored: {score} / {questionCounter} (
                {(score / questionCounter).toFixed(2) * 100}%)</h4>
              <p className="body-2 mb-2 text-n-3">
              Your speed: {speed} questions per second.
              </p>
              <p className="body-2 mb-4">
              {verdict}
              </p>
              <p className="body-2 text-blue-500">Not satisfied? &nbsp; <Button onClick={() => { reStart(); }}>Try again</Button></p>
             
            </div>
          </div>
        </div>
          
        </div>
    </Section>
  )
}

export default ArithmeticGameEnd