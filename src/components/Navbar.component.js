import { useState } from 'react'

import { FaUser } from 'react-icons/fa';

import UserLogo from './UserLogo.component';
import Button from './Button.component';

import Wrapper from '../styles/styled/Navbar.styled'

const Navbar = ({ user, setUser }) => {
    // const [showLogout, setShowLogout] = useState(false);
    return (
        <Wrapper>
            <div className='nav nav-3'>
                <div className='nav-logo'>
                    <div><div><UserLogo></UserLogo> Noa</div></div>
                </div>
                <Button className='nav-btn' type='button' label='log out' />
            </div>
        </Wrapper>


    )
}

export default Navbar