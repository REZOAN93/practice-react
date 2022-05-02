import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './User.css'

const User = (props) => {
    const {name,email,phone,yearlyincome,image}=props.user;
    
    return (
        <div className='user-components' >
            <div className='imgtag'>
                <img src={image} alt="" />
            </div>
            <div className='user-details'>
                    <h1>Name: {name}</h1>
                    <h2>Email: {email}</h2>
                    <h2>Phone: {phone}</h2>
                    <h2>Yearly Income: ${Number(yearlyincome)}</h2>
                    <button className='main-btn' onClick={()=>props.handleaddUser(yearlyincome)}>
                    <FontAwesomeIcon icon={faPlus} /> Add User</button>
            </div>
        </div>
    );
};

export default User;