import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="main">
          <Header />
          <SearchContainer />
        </div>
      </div>
    </>
  );
}

export default App;
