import React, { useState} from 'react'
import Button from '../Button'

const QuadraticEquation = ({menuShow}) => {
 const [xSquaredInput, setXSquaredInput] = useState("")
 const [xInput, setXInput] = useState("")
 const [constant, setConstant] = useState("")
 const [result, setResult] = useState(null)

 

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
    setResult(null)
 }

 const checkInputs = () => {
    if ((xSquaredInput.length === 0 || xSquaredInput == 0 ) && xInput.length && constant.length) {
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
   <div className="container mx-auto p-4 md:w-1/2 ">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Quadratic Equation Calculator
      </h1>
      <h2 className="text-xl font-bold mb-4 text-white">
      Enter the appropriate figures in the boxes below and push the 'solve' button to get the result
      </h2>
      <h2 className="text-xl font-bold mb-4 text-white">
       Quadratic Form: &nbsp; ax&sup2; + bx + c = 0
      </h2>

      <div className="flex gap-2 mb-3">
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

      </div>
      
      <div className="flex gap-2">
        <button
          onClick={checkInputs}
          className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Solve
        </button>
        <button
          onClick={reset}
          className="w-1/2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400"
        >
          Reset
        </button>
      </div>
     
      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-xl font-semibold text-black">{result}</h2>
        </div>
      )}
      <div className="mt-4">
         <Button onClick={menuShow}>Back To Menu</Button>
      </div> 
     
    </div>

  
  )
}

export default QuadraticEquation