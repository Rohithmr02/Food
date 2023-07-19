
import './App.css';
import Cardinfo from './component/Cardinfo';
import Main from './component/Main';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:MealId' element={<Cardinfo />} />
      </Routes>
    </Router>
  );
}

export default App;
