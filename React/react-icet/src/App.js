import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RoundButton from "./components/RoundButton";

function App() {
  return (
    <div className="App">
      <HomePage />
      <RoundButton name="Hi" />
      <AboutPage />
    </div>
  );
}

export default App;
