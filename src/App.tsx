import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopDetail from './pages/WorkshopDetail';
import BudgetPlan from './pages/BudgetPlan';
import DesignCourse from './pages/DesignCourse';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshop/:id" element={<WorkshopDetail />} />
            <Route path="/plan" element={<BudgetPlan />} />
            <Route path="/course" element={<DesignCourse />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
