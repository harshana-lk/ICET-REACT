import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RoundButton from "./components/RoundedButton/RoundButton";
import NavBar from "./components/Navigation/NavBar";



function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <RoundButton name="Hi" />
      <AboutPage />
    </div>
  );
}

export default App;
