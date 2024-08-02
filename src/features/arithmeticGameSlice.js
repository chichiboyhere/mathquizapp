import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameState: "start",
    score: 0,
    timer: 60,
    level: "basic",
    verdict: "",
    questionCounter: 1
}

export const arithmeticGameSlice = createSlice({
    name: 'arithmeticGame',
    initialState,
    reducers: {
        increaseScore: (state) => {
            state.score += 1;
        },
        decreaseScore: (state) => {
            state.score -= 1;
        },
        resetScore: (state) => {
            state.score = 0;
        },
        start: (state) =>{
            state.gameState = "start"
        },
        quiz: (state) =>{
            state.gameState = "quiz"
        },
        end: (state) =>{
            state.gameState = "end"
        },
        slowSpeed: (state) => {
            state.verdict = "That wasn't fast enough. Try harder next time."
        },
        goodSpeed: (state) => {
            state.verdict = "Your speed was good. There's room for improvement though"
        },
        greatSpeed: (state) => {
            state.verdict = "Wow, that was very fast! Keep it up!"
        },
        resetVerdict: (state) => {
            state.verdict = ""
        },
        selectedLevel: (state, action) => {
            state.level = action.payload;
        },
        resetGameLevel: (state) => {
            state.level = "basic"
        },
        countQuestion: (state) => {
            state.questionCounter += 1
        },
        resetCountQuestion: (state) => {
            state.questionCounter = 1
        },
        setTimer: (state, action) => {
            state.timer =  action.payload
        }, 
        resetTimer: (state) => {
            state.timer = 0
        }
    }
});

export const {increaseScore, decreaseScore, resetScore, start, quiz, end, slowSpeed, goodSpeed, greatSpeed, resetVerdict, selectedLevel, resetGameLevel, countQuestion, resetCountQuestion, setTimer, resetTimer } = arithmeticGameSlice.actions;

export default arithmeticGameSlice.reducer;