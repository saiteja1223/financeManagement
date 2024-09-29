import logo from './logo.svg';
import './App.css';
import Dashbord from './components/Dashbord';
import OpenEntries from './components/OpenEntries';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dues from './components/Dues';
import { EntityProvider } from './context/EntityContext';
function App() {
  return (
    <EntityProvider>
    <div className="App">
      <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' Component={Dashbord}></Route>
        <Route path='/addEntry' Component={OpenEntries}></Route>
        <Route path='/addEntry/:id' Component={OpenEntries}></Route>
        <Route path='/dues' Component={Dues}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    </EntityProvider>
  );
}

export default App;
