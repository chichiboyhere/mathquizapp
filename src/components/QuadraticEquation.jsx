import React, { useState} from 'react'
import Section from './Section'
import Heading from './Heading'
import Button from './Button'

const QuadraticEquation = () => {
 const [xSquaredInput, setXSquaredInput] = useState("")
 const [xInput, setXInput] = useState("")
 const [constant, setConstant] = useState("")
 const [result, setResult] = useState("")

 

 const handleXSquaredInput = (event) => {
    setXSquaredInput(event.target.value)
 }

 const handleXInput = (event) => {
    setXInput(event.target.value)
 }

 const handleConstant = (event) => {
    setConstant(event.target.value)
 }

 const solveProblem  = () => {
    const D = Math.pow(xInput, 2) - (4 * xSquaredInput * constant)
    const rootOne = (-xInput + Math.sqrt(D))/ (2 * xSquaredInput)
    const rootTwo = (-xInput - Math.sqrt(D))/ (2 * xSquaredInput)
    if (D < 0) {
        setResult("Unreal roots")
        console.log("unreal roots")
    }
    else if ( D === 0) {
        setResult(`The roots are: ${rootOne} (twice)`)
        console.log(rootOne+" twice")
    }
    else{
        setResult(`The roots are: ${rootOne.toFixed(3)} or ${rootTwo.toFixed(3)}`)
        console.log(rootOne)
        console.log(rootTwo)
    }   
 }

 const reset = () => {
    setXSquaredInput("")
    setXInput("")
    setConstant("")
 }

 const checkInputs = () => {
    if (xSquaredInput.length === 0 && xInput.length && constant.length) {
        alert("Cant's have the coefficent of x-squared as 0 or null")
    }
    else if (xSquaredInput.length === 0 && xInput.length === 0 && constant.length === 0){
        alert("You haven't entered any inputs")
    }
    else{
        solveProblem()
    }
 }
  return (
    <Section id="calculators">
     <div className="container">
      <Heading
        title="Quadratic Calculator"
        text="Enter the appropriate figures in the boxes below and push the 'solve' button to get the result(s)"
      />
         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490] mt-12 lg:dvh p-6">
             
          <form className="flex flex-col gap-5">
            <p> Format: &nbsp; ax&sup2; + bx + c = 0</p>
           
            <p className="flex gap-2">
                <input
                    className="rounded-md border-2 border-teal-100 py-1 text-center w-1/3"
                    id="xsquared"
                    type="number"
                    placeholder="a"
                    value={xSquaredInput}
                    onChange={handleXSquaredInput}
                />
               
                <input
                    className="rounded-md border-2 border-teal-100 py-1 text-center w-1/3"
                    id="x"
                    type="number"
                    placeholder="b"
                    value={xInput}
                    onChange={handleXInput}
                />
                
                <input
                    className="rounded-md border-2 border-teal-100 py-1 text-center w-1/3"
                    id="constant"
                    type="number"
                    placeholder="c"
                    value={constant}
                    onChange={handleConstant}
                />
               
            </p>
            <p className="text-center">
               {result} 
            </p>
            <p className="flex gap-2 justify-center md:gap-20">
                <Button onClick={checkInputs}>Solve</Button>
                <Button onClick={reset}>Reset</Button>
            </p>
        </form>
              
        </div>
    </div>
    </div>
    </div>
   </div>
  </Section>
  )
}

export default QuadraticEquation