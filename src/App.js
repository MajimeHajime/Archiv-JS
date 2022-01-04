import Login from './screens/auth/LoginScreen';
import Dashboard from './screens/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, 
  Route, Navigate} from "react-router-dom";
import { StoreProvider } from 'easy-peasy';
import store from './peasy/store';

function App() {
  return (
    <>
        <StoreProvider store={store}>
          <Router>
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard/>}/>
              <Route exact path="/" element={<Login/>}/>
            </Routes>
          </Router>
        </StoreProvider>
    </>
  );
}

export default App;
