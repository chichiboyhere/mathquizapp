// src/AmortizationCalculator.js
import React, { useState } from "react";
import Button from "../Button";

const AmortizationCalculator = ({menuShow}) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [schedule, setSchedule] = useState([]);

  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseInt(loanTerm) * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    let balance = principal;
    const schedule = [];

    for (let i = 1; i <= calculatedPayments; i++) {
      const interest = balance * calculatedInterest;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;

      schedule.push({
        month: i,
        payment: monthlyPayment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.max(balance, 0).toFixed(2),
      });
    }

    setSchedule(schedule);
  };

  const handleReset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setSchedule([]);
  };
  return (
    <div className="container md:w-1/2 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Amortization Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2">Loan Amount</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Interest Rate (%)</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Loan Term (years)</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={loanTerm}
          min={1}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={calculateAmortization}
          className="bg-blue-500 text-white px-4 py-2 rounded w-1/2"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="bg-yellow-500 text-white px-4 py-2 rounded w-1/2"
        >
          Reset
        </button>
      </div>

      {schedule.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Repayment Schedule</h2>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Payment</th>
                <th className="px-4 py-2">Principal</th>
                <th className="px-4 py-2">Interest</th>
                <th className="px-4 py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row.month}</td>
                  <td className="border px-4 py-2">{row.payment}</td>
                  <td className="border px-4 py-2">{row.principal}</td>
                  <td className="border px-4 py-2">{row.interest}</td>
                  <td className="border px-4 py-2">{row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4">
         <Button onClick={menuShow}>Back To Menu</Button>
      </div> 
    </div>
  );
};

export default AmortizationCalculator;
