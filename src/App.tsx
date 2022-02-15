import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import './scss/Main.scss'
interface PageProps {
    contained: string,
    placeholder: string,
}
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login contained="" placeholder="" />} />
      </Routes>
    </Router>
  );
}

export default App;
