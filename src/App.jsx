import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MultiplicationGame from "./components/multiplicationGame/MultiplicationGame";
import MultiplicationGameEnd from "./components/multiplicationGame/MultiplicationGameEnd";
import MultiplicationGamePlay from "./components/multiplicationGame/MultiplicationGamePlay";
import ArithmeticGame from "./components/arithmeticGame/ArithmeticGame";
import ArithmeticGameEnd from "./components/arithmeticGame/ArithmeticGameEnd";
import ArithmeticGamePlay from "./components/arithmeticGame/ArithmeticGamePlay";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Calculators from "./components/Calculators";


const App = () => {
  
  const multiplicationGameState = useSelector(
    (state) => state.multiplicationGame.gameState
  );
  const arithmeticGameState = useSelector(
    (state) => state.arithmeticGame.gameState
  );


  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {multiplicationGameState === "start" && <MultiplicationGame />}
        {multiplicationGameState === "quiz" && <MultiplicationGamePlay />}
        {multiplicationGameState === "end" && <MultiplicationGameEnd />}

        {arithmeticGameState === "start" && <ArithmeticGame />}
        {arithmeticGameState === "quiz" && <ArithmeticGamePlay />}
        {arithmeticGameState === "end" && <ArithmeticGameEnd />}
        <Calculators />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
