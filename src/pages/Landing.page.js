import { FaUser } from 'react-icons/fa';

import { Logo, Input, Button } from '../components';
import Wrapper from '../styles/styled/Landing.styled';

const Landing = () => {
    return (
        <div>
            <Wrapper>
                <nav>
                    <Logo></Logo>
                    <h1>Vote now or forever hold your peace</h1>

                </nav>
                <div className="full-screen-container">
                    <div className="login-container">
                        <h3 className="login-title"><FaUser></FaUser> Login</h3>
                        <form>
                            <Input type='email' label='Email'></Input>
                            <Input type='password' label='Password'></Input>
                            <Button type="submit" className="login-button" label='Sign In'></Button>
                        </form>
                    </div>
                </div>
            </Wrapper>

        </div>


    )
}

export default Landing;