import React, {useState, useRef} from 'react';
import Button from './Button';
import Section from './Section';
import Heading from './Heading';

const SimpleInterest = ({menuShow}) => {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [timeYear, setTimeYear] = useState("")
    const [timeMonth, setTimeMonth] = useState("")
    const [interest, setInterest] = useState("");
    const [amount, setAmount] = useState("");

    const refAmt = useRef()
    const refInt = useRef()
    const refPrinc = useRef()
    const refTimeYr = useRef()
    const refTimeMo = useRef()
    const refRate = useRef()

    const decoOutput = (myOutputRef) => {
        myOutputRef.current.style.backgroundColor = `green`
    }

    const decoOutputClear = (myOutputRef) => {
        myOutputRef.current.style.backgroundColor = ``
    }

    const calcAmtInt = (p, r, t) => {
        const i = (p * r * t * 0.01)
        const a = parseFloat(p) + parseFloat(i)
        setInterest(i.toFixed(2))
        setAmount(a.toFixed(2))
        
        decoOutput(refInt)
        decoOutput(refAmt)

    }

    const calcRateAmt = (i, p, t) => {
        const r = (100 * i) / ( p * t)
        const a = parseFloat(p) + parseFloat(i)
        setRate(r.toFixed(2))
        setAmount(a.toFixed(2))

        decoOutput(refRate)
        decoOutput(refAmt)
    }

    const timeYrMo = (t) =>{
        const tY = parseInt(t)
        if (tY === 0) {
         setTimeYear("")
        }
        else if (tY > 0) {
            setTimeYear(tY)
            decoOutput(refTimeYr)
        }
        if ((t - tY) > 0){
          setTimeMonth(Math.round((t-tY) * 12)) 
          decoOutput(refTimeMo)
        }
        else{
            setTimeMonth("")
        }
    }

    const calcTimeAmt = (i, p, r) => {
        const t = (100 * i) / (p * r);
        const a = parseFloat(p) + parseFloat(i)
        timeYrMo(t)
        setAmount(a.toFixed(2))

        decoOutput(refAmt)
    }

    const calcPrincAmt = (i, t, r) => {
        const p = (100 * i) / (t * r)
        const a = parseFloat(p) + parseFloat(i)
        setPrincipal(p.toFixed(2))
        setAmount(a.toFixed(2))

        decoOutput(refPrinc)
        decoOutput(refAmt)
    }

    const calcPrincTime = (i, a, r) => {
        const p = parseFloat(a) - parseFloat(i)
        const t =  (100 * i) / (p * r)
        setPrincipal(p.toFixed(2))
        timeYrMo(t) 

        decoOutput(refPrinc)
    }

    const calcRateInt = (t, a , p) => {
        const i = parseFloat(a) - parseFloat(p)
        const r = (100 * i) / (p * t)
        setInterest(i.toFixed(2))
        setRate(r.toFixed(2))

        decoOutput(refInt)
        decoOutput(refRate)
    }

    const calcPrincInt = (t, a, r) => {
         const p = a /(1 + 0.01 * r * t)
         const i = a - p
         setPrincipal(p.toFixed(2))
         setInterest(i.toFixed(2))

         decoOutput(refPrinc)
         decoOutput(refInt)
    }

    const calcTimeInt = (p, a, r) => {
        const i = parseFloat(a) - parseFloat(p)
        const t = (100 * i) / (p * r)
        setInterest(i.toFixed(2))
        timeYrMo(t)

        decoOutput(refInt)   
    }

    const calcPrincRate = (i, t, a) => {
        const p = parseFloat(a) - parseFloat(i)
        const r = (100 * i) / (p * t)
        setPrincipal(p.toFixed(2))
        setRate(r.toFixed(2))

        decoOutput(refPrinc)
        decoOutput(refRate)
    }

    const calcTimeRate = (i, p, a) => {
        if ( parseFloat(i) !== (parseFloat(a) - parseFloat(p))){
           alert(`First, your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount). Second, the information provided is not sufficient to calculate time and rate`)
        }
        else{
            alert("The information provided is not sufficient to calculate time and rate")
        }
        
    }

    
    const calcRate = (i, p, a, t) => {
        const r = (100 * i) / ( p * t)
        if (parseFloat(a) !== (parseFloat(p) + parseFloat(i))){
            alert(`Your inputs do not add up, as ${p} + ${i} is not equal to ${a}.`)
        }
        setRate(r.toFixed(2)) 
        decoOutput(refRate)  
    }

    const calcTime = (i, p, a, r) => {
        const t = (100 * i) / (p * r);
        if (parseFloat(a) !== (parseFloat(p) + parseFloat(i))){
            alert(`Your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount).`)
        }
        timeYrMo(t)
        
    }

    const formatTime = () =>{
        let timeTotal;
        if (timeYear.length && timeMonth.length) {

            let timeYr = parseFloat(timeYear)
            let timeMo = parseFloat(timeMonth)
             
            timeTotal = (timeYr + (timeMo / 12)).toFixed(2)    
        }
        else if (timeYear.length && timeMonth.length === 0){
            timeTotal = parseFloat(timeYear)
        }
        else{
            timeTotal = parseFloat((parseFloat(timeMonth)/12).toFixed(2))
        }
        return timeTotal
    }

    const checkInputs = () => {
        if (principal.length === 0 && rate.length === 0 && timeYear.length === 0 && timeMonth.length === 0 && interest.length === 0 && amount.length === 0){
           alert("Insufficient information")
        }
        else if (principal.length && rate.length && (timeYear.length || timeMonth.length)) {
            const time = formatTime()
            calcAmtInt(principal, rate, time)
        }
        else if (interest.length && principal.length && (timeYear.length || timeMonth.length)) {
            const time = formatTime()
            calcRateAmt(interest, principal, time)
        }
        else if (interest.length && principal.length && rate.length) {
            calcTimeAmt(interest, principal, rate)
        }
        else if (interest.length && (timeYear.length || timeMonth.length) && rate.length) {
            const time = formatTime()
            calcPrincAmt(interest, time, rate)
        }
        else if (interest.length && amount.length && rate.length) {
            calcPrincTime(interest, amount, rate)
        }
        else if ((timeYear.length || timeMonth.length) && amount.length && principal.length) {
            const time = formatTime()
            calcRateInt(time, amount, principal)
        }
        else if ((timeYear.length || timeMonth.length) && amount.length && rate.length) {
            const time = formatTime()
            calcPrincInt(time, amount, rate)
        }
        else if (principal.length && amount.length && rate.length) {
            calcTimeInt(principal, amount, rate)
        }
        else if (interest.length && (timeYear.length || timeMonth.length) && amount.length) {
            const time = formatTime()
            calcPrincRate(interest, time, amount)
        }
        else if (interest.length && principal.length && amount.length) {
            calcTimeRate(interest, principal, amount)
        }
        else if ((amount.length && principal > amount) || (amount.length && interest > amount)){
            alert("The amount entered seems faulty. Check to be sure!")
        }
        else if (interest.length && principal.length && amount.length && (timeYear.length || timeMonth.length)) {
            const time = formatTime()
            calcRate(interest, principal, amount, time)
        }
        else if (interest.length && principal.length && amount.length && rate.length) {
            calcTime(interest, principal, amount, rate)
        }
        else{
            alert("Insufficient Information!")
        }
        
    }

    

    const handlePrincipal = (event) =>{
        setPrincipal(event.target.value)
    }

    const handleRate = (event) => {
        setRate(event.target.value)
    }

    const handleTimeYear = (event) => {
        setTimeYear(event.target.value)
    }

    const handleTimeMonth = (event) => {
        setTimeMonth(event.target.value)
    }

    const handleInterest = (event) => {
        setInterest(event.target.value)
    }

    const handleAmount = (event) => {
        setAmount(event.target.value)
    }

    const reset = () => {
       setPrincipal("")
       setRate("")
       setTimeYear("")
       setTimeMonth("")
       setInterest("")
       setAmount("")
       decoOutputClear(refAmt)
       decoOutputClear(refPrinc)
       decoOutputClear(refInt)
       decoOutputClear(refRate)
       decoOutputClear(refTimeYr)
       decoOutputClear(refTimeMo)
    }

   
  return ( 
    <div className="container mx-auto p-4 md:w-1/2 ">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Simple Interest Calculator
      </h1>

      <h2 className="text-xl font-bold mb-4 text-white">
      Fill three relevant input fields and the calculator will fill out the rest
      </h2>
      <form className="flex flex-col gap-5">

        <label htmlFor="principal">Principal</label>
        <input
            className="rounded-md border-2 border-teal-100 py-1 text-center"
            id="principal"
            type="number"
            value={principal}
            onChange={handlePrincipal}
            ref={refPrinc}
        />
        <label htmlFor="rate">Rate (%)</label>
        <input
            className="rounded-md border-2 border-teal-100 py-1 text-center"
            id="rate"
            type="number"
            value={rate}
            onChange={handleRate}
            ref={refRate}
        />
        <label htmlFor="">Time</label>
        <p className="flex gap-2">
        <input
            className="rounded-md border-2 border-teal-100 py-1 text-center w-1/2"
            id="time"
            type="number"
            placeholder="Year(s)"
            value={timeYear}
            onChange={handleTimeYear}
            ref={refTimeYr}
        />
        <input
            className="rounded-md border-2 border-teal-100 py-1 text-center w-1/2"
            id="time"
            type="number"
            placeholder="Month(s)"
            value={timeMonth}
            onChange={handleTimeMonth}
            ref={refTimeMo}
        />
        </p>


        <label htmlFor="interest">Interest</label>
        <input
            className="rounded-md border-2 border-teal-100 py-1 text-center"
            id="interest"
            type="number"
            value={interest}
            onChange={handleInterest}
            ref={refInt}
        />
        <label htmlFor="amount">Amount</label>
        <input
            className="rounded-md border-2 border-teal-100 py-1 text-center"
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmount}
            ref={refAmt}
        />
       <div className="flex gap-2">
        <button
          onClick={checkInputs}
          className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="w-1/2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400"
        >
          Reset
        </button>
      </div>
    </form>
     <div className="mt-4">
         <Button onClick={menuShow}>Back To Menu</Button>
      </div> 
   </div>     
  )
}

export default SimpleInterest