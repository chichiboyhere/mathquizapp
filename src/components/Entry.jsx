import { useState } from 'react';
import Button from './Button';
import { useDispatch } from "react-redux";
import { quiz, tableEntered, setTimer} from "../features/multiplicationGameSlice";
import { useSelector } from "react-redux";

const Entry = () => {
    const timer = useSelector((state) => state.arithmeticGame.timer);
   
    const [time, setTime] = useState(timer);
   
    const [table, setTable] = useState("");
   
    const dispatch = useDispatch();
    
    const onTimeLimitSelector = (event) => {
        setTime(event.target.value);
    };

     // Table change handler
    const tableChangeHandler = (event) => {
        setTable(event.target.value);    
    };


    //start game
    const startGame = () => {
        if (table.length === 0){
            return
        }
        else{
            dispatch(quiz());
            dispatch(tableEntered(table));
            dispatch(setTimer(time))
        }    
    }

    const timeLimits = [60, 120, 180, 240, 300];

    return (
        <main className="mt-4 w-full p-4">
            
            <form className="flex flex-col gap-5">
                <label htmlFor="table">Enter Multiplication Table Limit</label>
                <input
                    className="rounded-md border-2 border-teal-100 py-1 text-center"
                    id="table"
                    type="number"
                    min="2"
                    required
                    value={table}
                    onChange={tableChangeHandler}
                />
                <label htmlFor="timeLimits">Choose The Time Limit</label>
                <select onChange={onTimeLimitSelector} className="rounded-md border-2 border-y-amber-200 py-1 text-center">
                    {timeLimits.map((timeLimit, index) => {
                        return (
                            <option key={index}>
                                {timeLimit}
                            </option>
                        );
                    })}
                </select>
                <Button onClick={startGame}>Start Game</Button>
            </form>
        </main>
    )
}

export default Entry
