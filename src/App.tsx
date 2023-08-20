import QuizApp from './pages/quizApp';
import Home from './pages/home';
import './pages/home.css';
import Instructions from './pages/instructionPage';
import './pages/instructionPage.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizApp' element={<QuizApp />} />
          <Route path='/instructionPage' element={<Instructions />} />
        </Routes>
      </Router>
    </>
  )
}

export default App