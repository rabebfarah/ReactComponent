import React from 'react'
import './profile.css'
import profil from './../images/photo.png'


const ProfilPhoto = () => {
      
    return (

    <div  >
         <img src={profil} alt="profile"style={{width:"300px", height:"350px"}}/>
    </div>
    
    )
}
export default ProfilPhoto