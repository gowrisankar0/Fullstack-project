import React from 'react'
import "./User.css"
const User = ({ id, name, age,  adress, contact,enquiry, }) => {
    return (
        <div className='user'>
         <h2>
            Lead id: <span>{id}</span>
         </h2>
         <h3>
         Lead Name: <span>{name}</span>
         </h3>
         <h3>
         Lead Age: <span>{age}</span>
         </h3>
         <h3>
         Lead Adress: <span>{adress}</span>
         </h3>
         <h3>
         Lead Contact: <span>{contact}</span>
         </h3>
         <h3>
         Lead Enquiry: <span>{enquiry}</span>
         </h3>
     <div className='user_bottom'>

   {/* <button className='user_delete' onClick={deleteUser}>Delete</button> */}

     </div>





        </div>
    )
}

export default User