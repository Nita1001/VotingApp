import { useState, useEffect } from "react";

import { PAGES } from '../constants'

import { Navbar, Card } from "../components"
import Wrapper from "../styles/styled/Main.styled"

const [login] = PAGES;
const userData = JSON.parse(localStorage.getItem('userData'));

const Main = ({ setPage }) => {

    const [user, setUser] = useState(userData);
    const descriptions = ["Inosuke Hashibira", "Obanai Iguro", "Tanjiro Kamado", "Kyojuro Rengoku"];
    const classes = ["card__background img1", "card__background img2", "card__background img3", "card__background img4"];
    const title = "Demon Slayer";
    console.log('user', user);
    useEffect(() => {
        if (!user) {
            setPage(login);
        }
    }, [setPage, user]);

    return (
        <Wrapper>
            <main className='dashboard'>
                <Navbar setUser={setUser} />
            </main>
            <div className=''>
                <div className="hero-section">
                    <div className="card-grid">
                        <Card classes={classes[0]} title={title} description={descriptions[0]}></Card>
                        <Card classes={classes[1]} title={title} description={descriptions[1]}></Card>
                        <Card classes={classes[2]} title={title} description={descriptions[2]}></Card>
                        <Card classes={classes[3]} title={title} description={descriptions[3]}></Card>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Main
