import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import studentLarge from "../assets/arithmeticGame/student2final.png";
import check from "../assets/multiplicationGame/check.svg";
import Button from "./Button";
import { arithmeticGameBenefits } from "../constants";
import { selectedLevel, setTimer, quiz } from '../features/arithmeticGameSlice';
import { useSelector, useDispatch } from "react-redux";


const ArithmeticGame = () => {
    const dispatch = useDispatch();  
    const level = useSelector((state) => state.arithmeticGame.level);
    const timer = useSelector((state) => state.arithmeticGame.timer);
    const [data, setData] = useState(level);
    const [time, setTime] = useState(timer);
   
    //start game
    const startGame = (event) => {
        dispatch(quiz());
        dispatch(selectedLevel(data));
        dispatch(setTimer(time));
    }

    
 
    const options = [
      "basic",
      "moderate",
      "challenging"
    ];
    
    const timeLimits = [60, 120, 180, 240, 300];

    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };

    const onTimeLimitSelector = (event) => {
        setTime(event.target.value);
    };
  return (
    <Section crosses id="arithmeticGame">
      <div className="container">
        <Heading
          title="Arithmetic Game to get your math juices flowing"
          text="With the Arithmetic Game, you strengthen your ability to do basic arithmetic processes, namely Addition, Subtraction, Multiplication and Division. So let's get started."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto opacity-30 md:opacity-100">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Student"
                height={730}
                src={studentLarge}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mt-2 mb-2">Your Tasks </h4>
              <p className="body-2 mb-2 text-n-3">
                The Arithmetic Game tests your:
              </p>
              <ul className="body-2">
                {arithmeticGameBenefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                  
                ))}  
              </ul>

              <p className="body-2 mb-[3rem] text-n-3">
                 So have fun while at it!
              </p>
              
              <main className="mt-4 w-full p-4"> 
                   <p className="py-3">
                      Please select a level to play
                   </p>
                 
                    <div className="flex flex-col gap-5">
                        <select onChange={onOptionChangeHandler} className="rounded-md border-2 border-teal-100 py-1 text-center">
                            {options.map((option, index) => {
                                return (
                                    <option key={index}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>

                        &nbsp;
                        Choose a time limit
                        <select onChange={onTimeLimitSelector} className="rounded-md border-2 border-y-amber-200 py-1 text-center">
                            {timeLimits.map((timeLimit, index) => {
                                return (
                                    <option key={index}>
                                        {timeLimit}
                                    </option>
                                );
                            })}
                        </select>
                    
                        <Button  onClick={startGame}>Start</Button>  
                </div>
                </main>
            </div> 
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ArithmeticGame;
