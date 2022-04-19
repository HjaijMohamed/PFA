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
import SupprimerPersonnel from "./Components/Personnel/Components/SupprimerPersonnel/SupprimerPersonnel";
import GererPresence from "./Scenes/Gerer Presence/GererPresence";
import SupprimerPresence from "./Components/Presence/Components/SupprimerPresence/SupprimerPresence";
import GererConge from "./Scenes/GererConge/GererConge";
import SupprimerConge from "./Components/Conge/Components/SupprimerConge/SupprimerConge";
import Conge from "./Scenes/Conge/Conge";
import Absence from "./Scenes/Absence/Absence";
import Retard from "./Scenes/Retard/Retard";
import GererAbsence from "./Scenes/GererAbsence/GererAbsence";
import SupprimerAbsence from "./Components/Absence/Components/SupprimerAbsence/SupprimerAbsence";

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
                <Route path="/supprimerPersonnel/:id" element ={<SupprimerPersonnel />} />

                <Route path="/gererPresence/*" element ={<GererPresence />} />
                {/*<Route path="/supprimerPresence/:id" element ={<SupprimerPresence />} />*/}
                <Route path="/supprimerPresence/:cin/:date" element ={<SupprimerPresence />} />
                <Route path="/gererConge/*" element ={<GererConge />} />
                <Route path="/supprimerConge/:id" element ={<SupprimerConge />} />
                
                <Route path="/gererAbsence/*" element ={<GererAbsence />} />
                <Route path="/supprimerAbsence/:id" element ={<SupprimerAbsence />} />
               
              </Routes>
            </div>
          </Router>
          </PersonnelProvider>
    </>
  );
}

export default App;
