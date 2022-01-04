import Login from './screens/auth/LoginScreen';
import Dashboard from './screens/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, 
  Route, Navigate} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
