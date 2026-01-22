import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ExpensesPage from "./pages/ExpensesPage";
import { ExpensesTracker } from "./contexts/ExpensesContext";
import './styles/global.css';

function App() {
  return (
    <ExpensesTracker>
      <BrowserRouter>
        <div id="content">
          <div id="wireframe">
            <img id="img-backdrop" src="images/backdrop2.png" />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/ExpensesPage" element={<ExpensesPage />} />
                </Routes>
              </main>           
          </div>
        </div>
      </BrowserRouter>
    </ExpensesTracker>
  )
}

export default App