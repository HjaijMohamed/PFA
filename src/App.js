import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Presence from './Scenes/Presence/Presence';
import SideBar from "./Components/SideBar/SideBar";
import GererPersonnel from "./Scenes/GererPersonnel/GererPersonnel";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import AjoutPersonnelForm from "./Components/Personnel/Components/AjoutPersonnelForm/AjoutPersonnelForm";
import ModifierPersonnel from "./Components/Personnel/Components/ModifierPersonnel/ModifierPersonnel";
import { PersonnelProvider } from "./Context/PersonnelContext";

import GererPresence from "./Scenes/Gerer Presence/GererPresence";

import GererConge from "./Scenes/GererConge/GererConge";

import Conge from "./Scenes/Conge/Conge";
import Absence from "./Scenes/Absence/Absence";
import Retard from "./Scenes/Retard/Retard";


function App() {
  return (
    <>  
        <PersonnelProvider>
        <Router>
        <NavBar />
            <div className="content">
              <SideBar />
              <Routes>
                <Route exact path="/" element ={<Presence />} />
                <Route exact path="/congeAuj" element ={<Conge />} />
                <Route path="/absenceAuj" element ={<Absence />} />
                <Route path="/retardAuj" element ={<Retard />} />

                <Route path="/gererPersonnel/*" element ={<GererPersonnel />} />
                <Route path="/ajoutPersonnelForm" element ={<AjoutPersonnelForm />} />
                <Route path="/modifierPersonnel/:id" element ={<ModifierPersonnel />} />

                <Route path="/gererPresence/*" element ={<GererPresence />} />
  
                <Route path="/gererConge/*" element ={<GererConge />} />            
              </Routes>
            </div>
          </Router>
          </PersonnelProvider>
    </>
  );
}

export default App;
