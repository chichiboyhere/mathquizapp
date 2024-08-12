import Section from "../Section";
import Heading from "../Heading";
import studentImage from "../../assets/multiplicationGame/studentImage.png";
import check from "../../assets/multiplicationGame/check.svg";
import { multiplicationGameBenefits } from "../../constants";
import Entry from "../Entry";

const MultiplicationGame = () => {
  return (
    <Section id="multiplicationGame">
      <div className="container">
        <Heading
          title="Multiplication Game for Mental Alertness"
          text="This game unlocks your mental reflexes by prompting you to answer multiplication problems as quickly as possible. "
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto opacity-30 md:opacity-100">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Student"
                height={730}
                src={studentImage}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto mb-1">
              <h4 className="h4 mt-2">Benefits</h4>
              <p className="body-2 mb-[1rem] text-n-3">
                The Multiplication Game helps you:
              </p>
              <ul className="body-2">
                {multiplicationGameBenefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              <Entry />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MultiplicationGame;
