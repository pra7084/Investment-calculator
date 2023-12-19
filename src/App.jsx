import Header from "./Components/Header";
import InvestmentForm from "./Components/InvestmentForm";
import Result from "./Components/Results";
import calculateInvestmentResults from "./Components/Investment";
function App() {
  let value = [];
  const valueGetter = (data) => {
    value = data;
  };
  return (
    <>
      <Header />
      <InvestmentForm toGetValues={valueGetter} />
      const annualData=<calculateInvestmentResults initialInvestment={value[0]}
        annualInvestment={value[1]}
        expectedReturn={value[2]}
        duration={value[3]}/>
      <Result data={annualData}/>
    </>
  );
}

export default App;
