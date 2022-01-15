import Login from './screens/auth/LoginScreen';
import Dashboard from './screens/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, 
  Route, Navigate} from "react-router-dom";
import { StoreProvider } from 'easy-peasy';
import store from './peasy/store';
import DashboardPage from './components/DashboardPage';
import HalamanSurat from './components/halamanSurat';
import RekapSurat from './screens/dashboard/RekapSurat';
import { DocumentForm } from './components/Form';
import UserProfile from './components/UserProfile';
import HalamanSurat2 from './components/HalamanSurat2';
import RekapSuratList from './components/RekapSuratList';
import RekapContainer from './components/RekapContainer';
import InputSurat from './components/InputSurat';
import SuratContainer from './components/SuratContainer';
import UserContainer from './components/UserContainer';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import DetailSurat from './components/detailSurat';
import EditUser from './components/EditUser';



function App() {
  return (
    <>
        <StoreProvider store={store}>
          <Router>
            <Routes>
              <Route exact path="/*" element={<Dashboard/>}>
                <Route path="dashboard" element={<DashboardPage/>}/>
                <Route path="surat/*" element={<SuratContainer/>}>
                  <Route path="list" element={<HalamanSurat2/>}/>
                  <Route path="edit"/>  
                  <Route path="detail" element={<DetailSurat/>}/>
                </Route>
                <Route path="rekap/*" element={<RekapContainer/>}>
                  <Route path="list" element={<RekapSuratList/>}/>
                  <Route path="detail" element={<RekapSurat/>}/>
                </Route>
                <Route path="upload" element={<InputSurat/>}/>
                <Route path="profile" element={<UserProfile/>} />
                <Route path="user" element={<UserContainer/>}> 
                  <Route path="list" element={<UserList/>}/>
                  <Route path="edit" element={<EditUser/>}/>
                </Route>
                <Route path="adduser" element={<AddUser/>}/>
              </Route>
              <Route exact path="/login" element={<Login/>}/>
            </Routes>
          </Router>
        </StoreProvider>
    </>
  );
}

export default App;
