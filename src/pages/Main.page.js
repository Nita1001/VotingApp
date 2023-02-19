import { useState, useEffect } from "react";

import { PAGES } from '../constants'

import { Navbar, Card } from "../components"
import Wrapper from "../styles/styled/Main.styled"

const [login] = PAGES;
const userData = JSON.parse(localStorage.getItem('userData'));

const Main = ({ setPage }) => {
    const demons2 = JSON.parse(localStorage.getItem('demons'));
    const [user, setUser] = useState(userData);
    const [votesArr, setVote] = useState(demons2);

    const descriptions = ["Inosuke Hashibira", "Obanai Iguro", "Tanjiro Kamado", "Kyojuro Rengoku"];
    const classes = ["card__background img1", "card__background img2", "card__background img3", "card__background img4"];
    const title = "Demon Slayer";

    const countVotes = (name) => {

        //Updating Local storage
        const demons = JSON.parse(localStorage.getItem('demons'));
        const updatedData = demons.map((demon) => {
        
            if (name === demon.name) {
                return { ...demon, votes: demon.votes + 1 };
            } else {
                return demon;
            }
            
        })

        setVote(updatedData);
        localStorage.setItem('demons', JSON.stringify(updatedData));
    }


    useEffect(() => {
        if (!user) {
            setPage(login);
        }
    }, [setPage, user]);

    return (
        <Wrapper>
            <main className='dashboard'>
                <Navbar userName={userData.name} setUser={setUser} />
            </main>
            <div className=''>
                <div className="hero-section">
                    <div className="card-grid">

                        {votesArr.map((demon, idx) => {
                            return <Card votes={demon.votes} onClick={() => { countVotes(descriptions[idx]) }} classes={classes[idx]} title={title} description={descriptions[idx]}></Card>
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Main
