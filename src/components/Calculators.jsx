import React, {useState} from 'react'
import Section from './Section'
import Heading from './Heading'
import backgroundUrl1 from "../assets/calcCards/card-1.svg"
import backgroundUrl2 from "../assets/calcCards/card-2.svg"
import backgroundUrl3 from "../assets/calcCards/card-3.svg"
import backgroundUrl4 from "../assets/calcCards/card-4.svg"
import backgroundUrl5 from "../assets/calcCards/card-5.svg"
import backgroundUrl6 from "../assets/calcCards/card-6.svg"
import { GradientLight } from './design/GradientLight'
import Arrow from '../assets/svg/Arrow'
import ClipPath from '../assets/svg/ClipPath'
import ScientificCalculator from './calculators/ScientificCalculator'
import SimpleInterest from './calculators/SimpleInterest'
import CompoundInterest from './calculators/CompoundInterest'
import AmortizationCalculator from './calculators/AmortizationCalculator'
import QuadraticEquation from './calculators/QuadraticEquation'
import MeasuresOfCentralTendencyRaw from './calculators/MeasuresOfCentralTendencyRaw'
import MeasuresOfCentralTendencyTabulate from './calculators/MeasuresOfCentralTendencyTabulated'
import MeasuresOfCentralTendencyGrouped from './calculators/MeasuresOfCentralTendencyGrouped'
import MeasuresOfDispersionUngrouped from './calculators/MeasuresOfDispersionUngrouped'
import MeasuresOfDispersionGrouped from './calculators/MeasuresOfDispersionGrouped'
import MathJax from "react-mathjax";

const formulas = [
  {
    text: `\\text{Simple Interest, I = }  \\frac{P R T}{100} \\\\ \\text{(where P = Principal, R = Rate,} \\\\ \\text{T = Time)}`, 
  },
  {
    text: `\\text{A = P} \\bigl( 1 + \\frac{r}{100}\\bigr)^n`,
  },
  {
    text: `\\text{Amount repayed in installments,} \\\\  A  = \\frac{Pi}{1 - (1 + i)^{-n}} \\\\ \\text{(where P = Loan acquired, i =} \\\\ \\text{interest rate(i.e rate divided}\\\\ \\text{by 100),n = total } \\\\ \\text{number of repayments done)}`,
  },  
];


const Calculators = () => {
  const [menu, setMenu] = useState(true)
  const [showScienticCalc, setShowScienticCalc] = useState(false)
  const [showSimpleIntCalc, setShowSimpleIntCalc] = useState(false)
  const [showCompoundIntCalc, setShowCompoundIntCalc] = useState(false)
  const [showAmortizationCalc, setShowAmortizationCalc] = useState(false)
  const [showQuadraticEqnCalc, setShowQuadraticEqnCalc] = useState(false)
  const [showMeasuresOfCentralTendencyRawCalc, setShowMeasuresOfCentralTendencyRawCalc] = useState(false)
  const [showMeasuresOfCentralTendencyTabulatedCalc, setShowMeasuresOfCentralTendencyTabulatedCalc] = useState(false)
  const [showMeasuresOfCentralTendencyGroupedCalc, setShowMeasuresOfCentralTendencyGroupedCalc] = useState(false)
  const [showMeasuresOfDispersionUngroupedCalc, setShowMeasuresOfDispersionUngroupedCalc] = useState(false)
  const [showMeasuresOfDispersionGroupedCalc, setShowMeasuresOfDispersionGroupedCalc] = useState(false)

  const scientificCalc = () => {
    setShowScienticCalc(true)
    setMenu(false)
 } 

  const simpleInterestCalc = () => {
     setShowSimpleIntCalc(true)
     setMenu(false)
  } 
  const compoundInterestCalc = () => {
     setShowCompoundIntCalc(true)
     setMenu(false)
  } 
  const amortizationCalc = () => {
     setShowAmortizationCalc(true)
     setMenu(false)
  } 
  const quadraticCalc = () => {
     setShowQuadraticEqnCalc(true)
     setMenu(false)
  } 
  const measuresOfCentralTendencyRawCalc = () => {
    setShowMeasuresOfCentralTendencyRawCalc(true)
     setMenu(false)
  } 
  const measuresOfCentralTendencyTabulatedCalc = () => {
    setShowMeasuresOfCentralTendencyTabulatedCalc(true)
    setMenu(false)
  } 
  const measuresOfCentralTendencyGroupedCalc = () => {
    setShowMeasuresOfCentralTendencyGroupedCalc(true)
    setMenu(false)
  } 
  const measuresOfDispersionUngroupedCalc = () => {
    setShowMeasuresOfDispersionUngroupedCalc(true)
    setMenu(false)
  } 
  const measuresOfDispersionGroupedCalc = () => {
    setShowMeasuresOfDispersionGroupedCalc(true)
    setMenu(false)
  } 

  const showMenu = () => {
     setShowScienticCalc(false)
     setShowSimpleIntCalc(false)
     setShowCompoundIntCalc(false)
     setShowAmortizationCalc(false)
     setShowQuadraticEqnCalc(false)
     setShowMeasuresOfCentralTendencyRawCalc(false)
     setShowMeasuresOfCentralTendencyTabulatedCalc(false)
     setShowMeasuresOfCentralTendencyGroupedCalc(false)
     setShowMeasuresOfDispersionUngroupedCalc(false)
     setShowMeasuresOfDispersionGroupedCalc(false)
     setMenu(true)
  } 
  
  return (
    <Section id="calculators">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Presenting, Bloomer's Cool Calculators"
        />
        
         {showScienticCalc && <ScientificCalculator menuShow={showMenu} />}
         {showSimpleIntCalc && <SimpleInterest menuShow={showMenu} />}
         {showCompoundIntCalc && <CompoundInterest menuShow={showMenu} />}
         {showAmortizationCalc && <AmortizationCalculator menuShow={showMenu} />}
         {showQuadraticEqnCalc && <QuadraticEquation menuShow={showMenu} />}
         {showMeasuresOfCentralTendencyRawCalc && <MeasuresOfCentralTendencyRaw menuShow={showMenu}/>}
         {showMeasuresOfCentralTendencyTabulatedCalc && <MeasuresOfCentralTendencyTabulate menuShow={showMenu}/>}
         {showMeasuresOfCentralTendencyGroupedCalc && <MeasuresOfCentralTendencyGrouped menuShow={showMenu}/>}
         {showMeasuresOfDispersionUngroupedCalc && <MeasuresOfDispersionUngrouped menuShow={showMenu}/>}
         {showMeasuresOfDispersionGroupedCalc && <MeasuresOfDispersionGrouped menuShow={showMenu}/>}
        


         {menu && <div className="flex flex-wrap gap-10 mb-10">
             {/* Scientific Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl1})`,
              }}
              
            >
               
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Scientific Calculator</h5>
                
                <p className="body-2 mb-6 text-n-3">Explore our robust scientific calculator with basic arithmetic functionality (like addition, subtraction, multiplication and division), trigonometric functionality, logarithm functionality, powers and roots and more</p>
                <div className="flex items-center mt-auto">
                 
                  &nbsp;
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={scientificCalc}  >
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              > 
              </div>
              <ClipPath />
              
            </div>
            
             {/* Simple Interest Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl2})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Simple Interest Calculator</h5>
                <p className="body-2 mb-6 text-n-3">Our Simple Interest Calculator is programmed to help your do simple interest calculations with ease. The formula is given by </p>
                
                <MathJax.Provider>
                  <p className="body-2 mb-6 text-n-3">
                    <MathJax.Node formula={formulas[0].text} />
                  </p>
                </MathJax.Provider>
                <p className="body-2 mb-6 text-n-3">
                  Also Amount, A = P + I.
                </p>
                <div className="flex items-center mt-auto" >
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={simpleInterestCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
              
            </div>
            
             {/* Compound Interest Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl3})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Compound Interest Calculator</h5>
                <p className="body-2 mb-6 text-n-3">The Compound Interest is worked out in each specified period, which could be 1 year, 1 quarter, 1 month... The interest obtained at a given period is added to the principal to yield an improved principal. The process is repeated till the total number of compounding is completed. Interest obtained this way is called compound interest</p>
                <MathJax.Provider>
                  <p className="body-2 mb-6 text-n-3">The amount A is given by:
                      <MathJax.Node formula={formulas[1].text} />
                  </p>
                </MathJax.Provider>
                
                <div className="flex items-center mt-auto" >
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={compoundInterestCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              > 
              </div>
              <ClipPath />
            </div>
             {/* Amotization Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl4})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Amortization Calculator</h5>
                <p className="body-2 mb-6 text-n-3">Amortization is a periodic repayment of a loan(typically a mortgage) in equal installments. </p>
                <MathJax.Provider>
                  <p className="body-2 mb-6 text-n-3">
                    <MathJax.Node formula={formulas[2].text} />
                  </p>
                </MathJax.Provider>
                
               
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={amortizationCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
             {/* Quadratic Equation */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl5})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Quadratic Equation Calculator</h5>
                <p className="body-2 mb-6 text-n-3">The general Quadratic Equation is of the form:</p>
                <p className="body-2 mb-6 text-n-3">
                  ax &sup2; + bx + c = 0 ( where a &#8800; 0)
                </p>
                <p className="body-2 mb-6 text-n-3">
                 Our Quadratic Equation fetches you roots/answers to any quadratic equation entered. Depending on your inputs, the result could vary from: two roots when you enter a quadratic equation with real roots,where the discriminant, D &gt; 0; a single root with the word "twice" in parenthesis when you enter a perfect square, where D = 0 and you get "unreal roots" if D &lt; 0 (NOTE D = b&sup2; - 4ac)
                </p>
               
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={quadraticCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
             {/* Measures Of Central Tendency(Raw) Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl6})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Mean, Mode Median(Raw) Calculator</h5>
                <p className="body-2 mb-6 text-n-3">The Measures of Central Tendency Calculator i.e Mean Mode and Median calculator gives you the average(or mean) of a set of data; the mode(or most occuring figure) and median(the figure(s) in the middle of a set of data that has been arranged in ascending/descending order of magnitude.)</p>
                <p className="body-2 mb-6 text-n-3">
                  This particular calculator is meant for data in the raw unprocessed form.
                </p>
                              
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={measuresOfCentralTendencyRawCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
             {/* Measures of Central Tendency Tabulated */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl1})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Measures Of Central Tendency(tabulated)</h5>
                <p className="body-2 mb-6 text-n-3">The Measures of Central Tendency (Tabulated) Calculator  is quite similar to the raw version of the calculator with an additional feature of having a frequency column with default value of '1'. The value of the frequency can be increased according to your requirement.</p>
               
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={measuresOfCentralTendencyTabulatedCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
             {/* Measures Of Central Tendency(Grouped Data) Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl2})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Mean, Mode Median(Grouped Data) Calculator</h5>
                <p className="body-2 mb-6 text-n-3">As the name implies, this calculator gives you the mean, mode and median values of a set of grouped data.  It is a convenient way of calculating the Measures of Central Tendency of a Grouped Data.
                </p>
                              
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={measuresOfCentralTendencyGroupedCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
             {/* Measures of Dispersion (Ungrouped) */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl3})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Measures Of Dispersion(Ungrouped Data) Calculator</h5>
                <p className="body-2 mb-6 text-n-3">The Measures of dispersion are essentially, Range( the difference between the lowest and highest values of a given data), The Mean Deviation, The Variance and Standard Deviation of a set of data.</p>
                <p className="body-2 mb-6 text-n-3">This calculator returns the afore-mentioned results when you enter the figures in the "value" column and, optionally, adjust the "frequency" column(which defaults to 1) </p>
               
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={measuresOfDispersionUngroupedCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
             {/* Measures Of Dispersion (Grouped Data) Calculator */}
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${backgroundUrl4})`,
              }}
              
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">Measures Of Dispersion (Grouped Data) Calculator</h5>
                <p className="body-2 mb-6 text-n-3">This is the grouped data version of Measures of Dispersion and returns Range, Mean Deviation(MD), Variance and Standard Deviation(SD). Additionally, the calculator provides the Mean value of the grouped data, as this is integral to the calculation of MD, Variance and SD, although it is worth mentioning that "Mean" is not one of the Measures of Dispersion. 
                </p>
                              
                <div className="flex items-center mt-auto">
                 
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={measuresOfDispersionGroupedCalc}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
               
              </div>

              <ClipPath />
            </div>
        
        </div>}
      </div>
    </Section>
  )
}

export default Calculators