import React, {useState} from 'react'
import Section from './Section'
import Heading from './Heading'
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
import { calculators } from '../constants'


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

  const handleClick = (id) => {
    if (id === "0") {
        scientificCalc()    
    }
    if (id === "1") {
        simpleInterestCalc()    
    }
    if (id === "2") {
        compoundInterestCalc()   
    }
    if (id === "3") {
        amortizationCalc()     
    }
    if (id === "4") {
        quadraticCalc()     
    }
    if (id === "5") {
        measuresOfCentralTendencyRawCalc()     
    }
    if (id === "6") {
        measuresOfCentralTendencyTabulatedCalc()     
    }
    if (id === "7") {
        measuresOfCentralTendencyGroupedCalc()     
    }
    if (id === "8") {
        measuresOfDispersionUngroupedCalc()     
    }
    if (id === "9") {
        measuresOfDispersionGroupedCalc()     
    }  
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
            {calculators.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer" onClick={() =>handleClick(item.id)}>
                    Try It Now
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>}
      </div>
    </Section>
  )
}

export default Calculators