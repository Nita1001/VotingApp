
import UserLogo from './UserLogo.component';
import Button from './Button.component';

import Wrapper from '../styles/styled/Navbar.styled'

const Navbar = ({setUser}) => {

    const handleLogout = () => {
        setUser('');
        localStorage.removeItem('userData');
      };

    return (
        <Wrapper>
            <div className='nav nav-3'>
                <div className='nav-logo'>
                    <div><div><UserLogo></UserLogo>Noa</div></div>
                </div>
                <h3>Vote for your favorite character</h3>
                <Button className='nav-btn' type='button' label='log out' handleClick={handleLogout} />
            </div>
        </Wrapper>

    )
}

export default Navbar