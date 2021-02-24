import { ExperienceBar } from "./components/ExperienceBar";
import "./styles/global.css";

function App() {
  return (
    <div className="container">
      <ExperienceBar currentExperience={350} />
    </div>
  );
}

export default App;
