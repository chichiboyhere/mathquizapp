import React, { useState, useRef } from "react";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [numOfCpd, setNumOfCpd] = useState("");
  const [interest, setInterest] = useState("");
  const [amount, setAmount] = useState("");

  const refAmt = useRef();
  const refInt = useRef();
  const refPrinc = useRef();
  const refNum = useRef();
  const refRate = useRef();

  const decoOutput = (myOutputRef) => {
    myOutputRef.current.style.backgroundColor = `green`;
  };

  const decoOutputClear = (myOutputRef) => {
    myOutputRef.current.style.backgroundColor = ``;
  };

  const calcAmtInt = (p, r, n) => {
    const x = 1 + parseFloat(r) * 0.01;
    const a = parseFloat(p) * Math.pow(x, parseFloat(n));
    const i = a - p;
    setInterest(i.toFixed(2));
    setAmount(a.toFixed(2));

    decoOutput(refInt);
    decoOutput(refAmt);
  };

  const calcRateAmt = (i, p, n) => {
    const a = parseFloat(p) + parseFloat(i);
    const x = a / p;
    const y = Math.pow(x, 1 / n);
    const r = 100 * (y - 1);
    setRate(r.toFixed(2));
    setAmount(a.toFixed(2));

    decoOutput(refRate);
    decoOutput(refAmt);
  };

  const calcNumAmt = (i, p, r) => {
    const a = parseFloat(p) + parseFloat(i);
    const x = a / p;
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);
    setAmount(a.toFixed(2));
    setNumOfCpd(n.toFixed(1));

    decoOutput(refAmt);

    decoOutput(refNum);
  };

  const calcPrincNum = (i, a, r) => {
    const p = parseFloat(a) - parseFloat(i);
    const x = a / p;
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);

    setPrincipal(p.toFixed(2));
    setNumOfCpd(n.toFixed(1));

    decoOutput(refPrinc);
    decoOutput(refNum);
  };

  const calcRateInt = (n, a, p) => {
    const i = parseFloat(a) - parseFloat(p);
    const x = a / p;
    const y = Math.pow(x, 1 / n);
    const r = 100 * (y - 1);
    setInterest(i.toFixed(2));
    setRate(r.toFixed(2));

    decoOutput(refInt);
    decoOutput(refRate);
  };

  const calcPrincInt = (n, a, r) => {
    const x = 100 / (100 + r);
    const y = Math.pow(x, n);
    const p = parseFloat(a) * y;
    const i = parseFloat(a) - p;
    setPrincipal(p.toFixed(2));
    setInterest(i.toFixed(2));

    decoOutput(refPrinc);
    decoOutput(refInt);
  };

  const calcNumInt = (p, a, r) => {
    const i = parseFloat(a) - parseFloat(p);
    const x = parseFloat(a) / parseFloat(p);
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);

    setInterest(i.toFixed(2));
    setNumOfCpd(n.toFixed(1));

    decoOutput(refNum);
    decoOutput(refInt);
  };

  const calcPrincRate = (i, n, a) => {
    const p = parseFloat(a) - parseFloat(i);
    const x = parseFloat(a) / p;
    const y = Math.pow(x, 1 / n);
    const r = 100 * (y - 1);

    setPrincipal(p.toFixed(2));
    setRate(r.toFixed(2));

    decoOutput(refPrinc);
    decoOutput(refRate);
  };

  const calcNumRate = (i, p, a) => {
    if (parseFloat(i) !== parseFloat(a) - parseFloat(p)) {
      alert(
        `First, your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount). Second, the information provided is not sufficient to calculate number of compounding and rate`
      );
    } else {
      alert(
        "The information provided is not sufficient to calculate number of compounding and rate"
      );
    }
  };

  const calcRate = (i, p, a, n) => {
    const x = parseFloat(a) / parseFloat(p);
    const y = Math.pow(x, 1 / parseFloat(n));
    const r = 100 * (y - 1);
    if (parseFloat(a) !== parseFloat(p) + parseFloat(i)) {
      alert(`Your inputs do not add up, as ${p} + ${i} is not equal to ${a}.`);
    }
    setRate(r.toFixed(2));
    decoOutput(refRate);
  };

  const calcNum = (i, p, a, r) => {
    const x = parseFloat(a) / parseFloat(p);
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);

    if (parseFloat(a) !== parseFloat(p) + parseFloat(i)) {
      alert(
        `Your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount).`
      );
    }
    setNumOfCpd(n.toFixed(1));

    decoOutput(refNum);
  };

  const checkInputs = () => {
    if (
      principal.length === 0 &&
      rate.length === 0 &&
      numOfCpd.length === 0 &&
      interest.length === 0 &&
      amount.length === 0
    ) {
      alert("Insufficient information");
    } else if (principal.length && rate.length && numOfCpd.length) {
      calcAmtInt(principal, rate, numOfCpd);
    } else if (interest.length && principal.length && numOfCpd.length) {
      calcRateAmt(interest, principal, numOfCpd);
    } else if (interest.length && principal.length && rate.length) {
      calcNumAmt(interest, principal, rate);
    } else if (interest.length && amount.length && rate.length) {
      calcPrincNum(interest, amount, rate);
    } else if (numOfCpd.length && amount.length && principal.length) {
      calcRateInt(numOfCpd, amount, principal);
    } else if (numOfCpd.length && amount.length && rate.length) {
      calcPrincInt(numOfCpd, amount, rate);
    } else if (principal.length && amount.length && rate.length) {
      calcNumInt(principal, amount, rate);
    } else if (interest.length && numOfCpd.length && amount.length) {
      calcPrincRate(interest, numOfCpd, amount);
    } else if (interest.length && principal.length && amount.length) {
      calcNumRate(interest, principal, amount);
    } else if (
      (amount.length && principal > amount) ||
      (amount.length && interest > amount)
    ) {
      alert("The amount entered seems faulty. Check to be sure!");
    } else if (
      interest.length &&
      principal.length &&
      amount.length &&
      numOfCpd.length
    ) {
      calcRate(interest, principal, amount, numOfCpd);
    } else if (
      interest.length &&
      principal.length &&
      amount.length &&
      rate.length
    ) {
      calcNum(interest, principal, amount, rate);
    } else {
      alert("Insufficient Information!");
    }
  };

  const handlePrincipal = (event) => {
    setPrincipal(event.target.value);
  };

  const handleRate = (event) => {
    setRate(event.target.value);
  };

  const handleNumOfCpd = (event) => {
    setNumOfCpd(event.target.value);
  };

  const handleInterest = (event) => {
    setInterest(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => {
    setPrincipal("");
    setRate("");
    setNumOfCpd("");
    setInterest("");
    setAmount("");
    decoOutputClear(refAmt);
    decoOutputClear(refPrinc);
    decoOutputClear(refInt);
    decoOutputClear(refRate);
    decoOutputClear(refNum);
  };

  //   if (principal.length === 0) {
  //     decoOutputClear(refPrinc);
  //   } else if (rate.length === 0) {
  //     decoOutputClear(refRate);
  //   } else if (numOfCpd.length === 0) {
  //     decoOutputClear(refNum);
  //   } else if (interest.length === 0) {
  //     decoOutputClear(refInt);
  //   }
  return (
    <Section id="calculators">
      <div className="container">
        <Heading
          title="Compound Interest Calculator"
          text="Fill three relevant input fields and the calculator will fill out the rest"
        />
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490] mt-12 lg:dvh p-6">
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
                  <label htmlFor="">
                    Number of times interest is compounded
                  </label>

                  <input
                    className="rounded-md border-2 border-teal-100 py-1 text-center"
                    id="numOfCpd"
                    type="number"
                    value={numOfCpd}
                    onChange={handleNumOfCpd}
                    ref={refNum}
                  />

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
  );
};

export default CompoundInterest;
