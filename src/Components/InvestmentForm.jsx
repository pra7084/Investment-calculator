import "./InvestmentForm.css";
const InvestmentForm = () => {
    let investment=0;
    const initialInvestChangeHandler=(event)=>{
           investment=event.target.value;
    }
  return (
    <div className="container">
      <div className="input-group">
        <div className="form">
          <label>initial investment</label>
          <input onChange={initialInvestChangeHandler} type="number" value={investment}/>
        </div>
        <div className="form">
          <label>Annula Investment</label>
          <input type="number"></input>
        </div>
      </div>
      <div className="input-group">
        <div className="form">
          <label>Expected Return</label>
          <input type="number"></input>
        </div>
        <div className="form">
          <label>Duration</label>
          <input type="number"></input>
        </div>
      </div>
    </div>
  );
};
export default InvestmentForm;
