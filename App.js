
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
     <Navbar title="TEXTUTIL" aboutText="About"/>
     <div className="container my-3">
     <Textform  heading="Enter text to analyze below"/>
      </div>
    </>
  );
}

export default App;
