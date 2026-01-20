import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ExpensesPage from "./pages/ExpensesPage";
import { ExpensesTracker } from "./contexts/ExpensesContext";
import './styles/global.css';

function App() {
  return (
    <ExpensesTracker>
      <BrowserRouter>
        <img id="img-backdrop" src='images/backdrop.png'/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ExpensesPage" element={<ExpensesPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ExpensesTracker>
  )
}

export default App