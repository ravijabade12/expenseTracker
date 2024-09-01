import Header from "./Components/Header";
import "./App.css";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import TranscationList from "./Components/TranscationList";
import AddTranscation from "./Components/AddTranscation";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpense />
        <TranscationList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
}

export default App;
