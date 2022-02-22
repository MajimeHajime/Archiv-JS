import Login from './screens/auth/LoginScreen';
import Dashboard from './screens/dashboard/Dashboard';
import { HashRouter as Router, Routes, 
  Route, Navigate} from "react-router-dom";
import { StoreProvider, useStoreState } from 'easy-peasy';
import store from './peasy/store';
import DashboardPage from './components/DashboardPage';
import HalamanSurat from './components/halamanSurat';
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
import RekapSurat from './components/RekapSurat';
import Error from './components/unauth';



function App() {

  return (
    <>
        <StoreProvider store={store}>
          <Bruh/>
        </StoreProvider>
    </>
  );
}
const Bruh = () => {
  const authorized = useStoreState((state) => state.authorized)
  const userData = useStoreState((state) => state.userData)

  return (
    <>
        <Router>
          <Routes>
            <Route exact path = "/" element={<Navigate to="/main/dashboard"/>}/>
            <Route exact path="/main/*" element={<Dashboard/>}>
              <Route path="dashboard" element={<DashboardPage/>}/>
              <Route path="surat/*" element={<SuratContainer/>}>
                <Route path="list" element={<HalamanSurat2/>}/>
                <Route path="edit"/>  
                <Route path="detail" element={<DetailSurat/>}/>
              </Route>
              <Route path="rekap/*" element={<RekapContainer/>}>
                <Route path="list" element={<RekapSurat/>}/>
                {/* <Route path="detail" element={<HalamanSurat2/>}/> */}
              </Route>
              <Route path="upload" element={userData.access_levels ? userData.access_levels >= "1" ? <InputSurat/>: <Error/> : <Error/>}/>
              <Route path="profile" element={authorized ? <UserProfile/>: <Error/>} />
              <Route path="user" element={userData.access_levels ? userData.access_levels == "3" ? <UserContainer/>: <Error/> : <Error/> }> 
                <Route path="list" element={ userData.access_levels ? userData.access_levels == "3" ? <UserList/>: <Error/> : <Error/>}/>
                <Route path="edit" element={userData.access_levels ? userData.access_levels == "3" ? <EditUser/>: <Error/> : <Error/>}/>
              </Route>
              <Route path="adduser" element={userData.access_levels ? userData.access_levels == "3" ? <AddUser/> : <Error/> : <Error/> }/>
            </Route>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
