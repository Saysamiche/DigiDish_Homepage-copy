import "./App.css";
import Clients from "./Components/Clients";
import DigiDishBg from "./Components/DigiDishBg";
import EmenuPlatForm from "./Components/EmenuPlatform";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import UpperSection from "./Components/UpperSection";

function App() {
  return (
    <div className="App">
      <UpperSection />
      <EmenuPlatForm />
      <Features />
      <HowItWorks />
      <Clients />
      <DigiDishBg />
      <Footer />
    </div>
  );
}

export default App;
