
import './App.css';
import Dashbord from './components/Dashbord';
import OpenEntries from './components/OpenEntries';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dues from './components/Dues';
import { EntityProvider } from './context/EntityContext';
import Slide1Agenda from './powerpoint/Slide1Agenda';
import Slide2WhatIsRecession from './powerpoint/Slide2WhatIsRecession';
import Slide3CausesOfRecession from './powerpoint/Slide3CausesOfRecession';
import Slide4HistoricalRecessions from './powerpoint/Slide4HistoricalRecessions';
import Slide5CausesOfRecessions from './powerpoint/Slide5CausesOfRecessions';
import Slide6ImpactOfRecessions from './powerpoint/Slide6ImpactOfRecessions';
import Slide7RecessionPreparation from './powerpoint/Slide7RecessionPreparation';
import Slide8SectorImpact from './powerpoint/Slide8SectorImpact';
import Slide9Preparation from './powerpoint/Slide9Preparation';
import Slide10Conclusion from './powerpoint/Slide10Conclusion';
import Slide11ThankYou from './powerpoint/Slide11ThankYou';
function App() {
  return (
    <EntityProvider>
    <div className="App">
      <BrowserRouter>
     {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' Component={Dashbord}></Route>
        <Route path='/addEntry' Component={OpenEntries}></Route>
        <Route path='/addEntry/:id' Component={OpenEntries}></Route>
        <Route path='/dues' Component={Dues}></Route>
        <Route path='/slide1' Component={Slide1Agenda}></Route>
        <Route path='/slide2' Component={Slide2WhatIsRecession}></Route>
          <Route path='/slide3' Component={Slide3CausesOfRecession}></Route>
          <Route path='/slide4' Component={Slide4HistoricalRecessions}></Route>
           <Route path='/slide5' Component={Slide5CausesOfRecessions}></Route>
           <Route path='/slide6' Component={Slide6ImpactOfRecessions}></Route>
           <Route path='/slide7' Component={Slide7RecessionPreparation}></Route>
            <Route path='/slide8' Component={Slide8SectorImpact}></Route>
             <Route path='/slide9' Component={Slide9Preparation}></Route>
             <Route path='/slide10' Component={Slide10Conclusion}></Route>
             <Route path='/slide11' Component={Slide11ThankYou}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    </EntityProvider>
  );
}

export default App;
