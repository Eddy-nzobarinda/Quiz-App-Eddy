import QuizApp from './pages/quizApp';
import Home from './pages/home';
import './pages/home.css';
import Instructions from './pages/instructionPage';
<<<<<<< Updated upstream
import './pages/instructionPage.css';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signup';
import './pages/login.css'
// import SubmitPage from './pages/submissionPage';
=======
import './pages/instructionPage.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizApp' element={<QuizApp />} />
          <Route path='/instructionPage' element={<Instructions />} />
<<<<<<< Updated upstream
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route path='/submissionPage' element={<SubmitPage />} /> */}
=======
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </>
  )
}

export default App