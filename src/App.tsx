import "./App.css";
import { AppRoute } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">{AppRoute}</div>
    </BrowserRouter>
  );
}

export default App;
