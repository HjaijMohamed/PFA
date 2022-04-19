import './personnelConsultCard.css';
import PersonnelList from './PersonnelList';


function PersonnelConsultCard() {
  return (
        <div className='personnelConsultCard-content'>
          <div className='personnelItem-content3' >
          <div id='img-id'>
              <div id='id-item'>#RANG</div>
              <div > IMAGE</div>
          </div>
          
          <div id='nom-email'><div>
              <div >INFO</div>
          </div></div>
          
          <div id='tel'>N°TEL</div>
          
          <div id='cin'>N°CIN</div>
          
          <div id='heure_trav'>H_TRAV</div>
          
      </div>
        <PersonnelList />
        </div>
  )
}

export default PersonnelConsultCard