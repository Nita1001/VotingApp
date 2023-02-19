import { useState, useEffect } from "react";

import { PAGES } from '../constants'

import { Navbar, Card } from "../components"
import Wrapper from "../styles/styled/Main.styled"
import demons from '../mock/Demons'



const [login] = PAGES;
const userData = JSON.parse(localStorage.getItem('userData'));

const Main = ({ setPage }) => {

    const [user, setUser] = useState(userData);
    const [votesArr, setVote] = useState(demons);


    const descriptions = ["Inosuke Hashibira", "Obanai Iguro", "Tanjiro Kamado", "Kyojuro Rengoku"];
    const classes = ["card__background img1", "card__background img2", "card__background img3", "card__background img4"];
    const title = "Demon Slayer";

    const countVotes = (name) => {

        //Updating Local storage
        const demons = JSON.parse(localStorage.getItem('demons'));
        const updatedData = demons.map((demon)=>{
            let update = demon;
            if(name === demon.name){
                 update = {...demon, votes: demon.votes + 1};
            } else {
                return update;
            }
            return update;
        })

        setVote(updatedData);
        localStorage.setItem('demons', JSON.stringify(updatedData));
 

          console.log(votesArr);
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
                        <Card votes={votesArr[0].votes} onClick={()=>{countVotes(descriptions[0])}}  classes={classes[0]} title={title} description={descriptions[0]}></Card>
                        <Card votes={votesArr[1].votes} onClick={()=>{countVotes(descriptions[1])}} classes={classes[1]} title={title} description={descriptions[1]}></Card>
                        <Card votes={votesArr[2].votes} onClick={()=>{countVotes(descriptions[2])}} classes={classes[2]} title={title} description={descriptions[2]}></Card>
                        <Card votes={votesArr[3].votes} onClick={()=>{countVotes(descriptions[3])}} classes={classes[3]} title={title} description={descriptions[3]}></Card>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Main
