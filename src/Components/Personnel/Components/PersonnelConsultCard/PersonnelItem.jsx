import { Link } from 'react-router-dom'

function PersonnelItem({item,index}) {
  const urlModif=`/modifierPersonnel/${item.cin}`
  const urlimg=`http://127.0.0.1:8000${item.img}`
  const urlSuprim=`/supprimerPersonnel/${item.cin}`

  
  
  return (
    <div className='personnelItem-content' id= {index%2 ===0  ?'impair'  : 'pair'}>
        
        <div id='img-id'>
            <div id='id-item'>#0{index}</div>
            <div > <img src={urlimg} id='img-icon' /> </div>
        </div>
        <div id='nom-email'><div>
            <div >{item.nom} {item.prenom}</div>
            <div id='email'>{item.email}</div>
        </div></div>
        <div id='tel'>{item.tel}</div>
        <div id='cin'>{item.cin}</div>
        <div id='heure_trav'>{item.heure_trav}</div>
        <div id='btn'>
        <div></div>
          <div id='btn-div'>
          <Link className='linkStyle' to={urlModif}> <div className='btn-modify'>Modifier</div> </Link>
        <div><Link className='linkStyle' to={urlSuprim}> <div className='btn-delete' >Supprimer</div></Link></div>
        </div>
        </div>
      
    </div>
            
  )
}

export default PersonnelItem