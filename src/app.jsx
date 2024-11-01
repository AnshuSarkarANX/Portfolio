import Navbar from './Components/Navbar';
import WorkEx from './Components/WorkEx';
import ProjectSection from './Components/ProjectSection';
import './app.css';
export function App() {

  return (
    <div className="app relative">
      <div className="mainSection h-screen text-center">
        <div className="Namebar">
          <p className="Name font-bold drop-shadow-sm">ANSHU SARKAR</p>
        </div>
        <div className="rolebox">
          <p className="role font-bold drop-shadow-lg ">
            Frontend Developer
          </p>
        </div>
        <Navbar />
      </div>
      <ProjectSection />
    </div>
  );
}
