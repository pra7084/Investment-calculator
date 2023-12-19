import { useState } from "react";
import "./InvestmentForm.css";
const InvestmentForm = ({toGetValues}) => {
    const[initInvestment,setInitInvestment]=useState(0);
    const[annualInvest,setAnnualInvest]=useState(0);
    const[interest,setInterest] =useState(0);
    const[duration,setDuration]=useState(0);
    
    const initialInvestChangeHandler=(event)=>{
           setInitInvestment(event.target.value);
    }
    const annualInvestChangeHandler=(event)=>{
        setAnnualInvest(event.target.value);
    }
    const interestChangeHandler=(event)=>{
        setInterest(event.target.value);
    }
    const durationChangeHandler=(event)=>{
        setDuration(event.target.value);
    }
   const submitHandler=()=>{
       const formData=[
    initInvestment,annualInvest,interest,duration,
   ];
   toGetValues(formData);
   console.log("done");
   }
   
  return (
    <>
    <div className="container">
      <div className="input-group">
        <div className="form">
          <label>initial investment</label>
          <input onChange={initialInvestChangeHandler} type="number" value={initInvestment}/>
        </div>
        <div className="form">
          <label>Annula Investment</label>
          <input type="number" onChange={annualInvestChangeHandler} value={annualInvest}></input>
        </div>
      </div>
      <div className="input-group">
        <div className="form">
          <label>Expected Return</label>
          <input type="number" onChange={interestChangeHandler} value={interest}></input>
        </div>
        <div className="form">
          <label>Duration</label>
          <input type="number" onChange={durationChangeHandler} value={duration}></input>
        </div>
      </div>
    </div>
    <button onClick={submitHandler}>Calculate</button>
    </>
  );
};
export default InvestmentForm;
