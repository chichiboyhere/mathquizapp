import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MultiplicationGame from "./components/MultiplicationGame";
import MultiplicationGameEnd from "./components/MultiplicationGameEnd";
import MultiplicationGamePlay from "./components/MultiplicationGamePlay";
import ArithmeticGame from "./components/ArithmeticGame";
import ArithmeticGameEnd from "./components/ArithmeticGameEnd";
import ArithmeticGamePlay from "./components/ArithmeticGamePlay";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import ScientificCalculator from "./components/ScientificCalculator";
import SimpleInterest from "./components/SimpleInterest";
import CompoundInterest from "./components/CompoundInterest";
import QuadraticEquation from "./components/QuadraticEquation";
import MeasuresOfDispersionGrouped from "./components/MeasuresOfDispersionGrouped";
import MeasuresOfDispersionUngrouped from "./components/MeasuresOfDispersionUngrouped";
import MeasuresOfCentralTendencyRaw from "./components/MeasuresOfCentralTendencyRaw";
import MeasuresOfCentralTendencyGrouped from "./components/MeasuresOfCentralTendencyGrouped";
import MeasuresOfCentralTendencyTabulate from "./components/MeasuresOfCentralTendencyTabulated";


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
        {/* <ScientificCalculator /> */}
        {/* <CompoundInterest /> */}
        {/* <QuadraticEquation /> */}
        {/* <MeasuresOfDispersionGrouped /> */}
        {/* <MeasuresOfDispersionUngrouped /> */}
        <MeasuresOfCentralTendencyRaw />
        {/* <MeasuresOfCentralTendencyTabulate /> */}
        {/* <MeasuresOfCentralTendencyGrouped /> */}
        {/* <ModeCalculator /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
