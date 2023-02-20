import { useState } from 'react';

import useInput from './../hooks/useInput';
import { validateEmail } from '../utils/validateEmail';
import { validatePassword } from '../utils/validatePassword';
import { FaUser } from 'react-icons/fa';
import { Logo, Input, Button } from '../components';
import Wrapper from '../styles/styled/Login.styled';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [msg1, setMsg] = useState('');

    const users = JSON.parse(localStorage.getItem('users'));

    const {
        value: email,
        error: emailError,
        handleChange: handleEmailChange,
        handleBlur: handleEmailBlur
    } = useInput('Please enter a valid email', setError, validateEmail);

    const {
        value: password,
        error: passwordError,
        handleChange: handlePasswordChange,
        handleBlur: handlePasswordBlur
    } = useInput('Please enter your password', setError);



    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!email || validateEmail(email) || !password) {
            setIsLoading(false);
            setError(true);
            handleEmailBlur();
            handlePasswordBlur();
            return;
        } else {

            const validUser = users.find((user) => user.email === email)
            const validPassword = (validUser.password === password);
            const check = validatePassword(password, validUser);

            if(!check){
                setIsLoading(false);
                setError(true);
                setMsg('WrongPass');
                console.log('error', msg1);
            }

            if (validPassword && !(validUser.voted)) {
                setError(false);

                localStorage.setItem('userData', JSON.stringify(validUser));
                setTimeout(() => {
                    window.location.reload(false);
                }, 2000);

            } else {
                return;
            }
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Wrapper>
                        <nav>
                            <Logo></Logo>
                            <h1>Vote now or forever hold your peace</h1>
                        </nav>
                        <div className="full-screen-container">
                            <div className="login-container">
                                <h3 className="login-title"><FaUser></FaUser> Log In</h3>
                                <form onSubmit={onSubmit} className='form'>
                                    <Input
                                        handleInput={handleEmailChange}
                                        name='email' type='email'
                                        label='Email'
                                        message={emailError.message}
                                        error={emailError.isError}>
                                    </Input>

                                    <Input
                                        handleInput={handlePasswordChange}
                                        name='password'
                                        type='password'
                                        label='Password'
                                        message={passwordError.message}
                                        error={passwordError.isError}>
                                    </Input>

                                    <Button
                                        type="submit"
                                        className="login-button"
                                        label='Log In'
                                        isLoading={isLoading}
                                        error={error}
                                        message ={msg1}>
                                        
                                    </Button>

                                </form>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </header>
        </div>

    )
}

export default Login;