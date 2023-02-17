import { Navbar, Card } from "../components"
import Wrapper from "../styles/styled/Main.styled"

const Main = () => {

    const descriptions = ["Random Description 1", "Random Description 2", "Random Description 3"];
    const images = ["img1", "img2", "img3"];
    const titles = ["Some Text 1", "Some Text 2", "Some Text 3"]

    return (
        <Wrapper>
            <main className='dashboard'>
                <Navbar />
            </main>
            <div className='dashboard-page'>

                <div className="App">
                <h3>Vote for your favorite charachter</h3>

                    <div className="cards-header">
                        <div className="container">
                            <Card images={images[0]} title={titles[0]} description={descriptions[0]}></Card>
                            <Card images={images[1]} title={titles[1]} description={descriptions[1]}></Card>
                            <Card images={images[2]} title={titles[2]} description={descriptions[2]}></Card>
                        </div>
                    </div>
                </div>

                {/* <UsersList users={users} deleteUser={delUser} /> */}
            </div>
        </Wrapper>
    )
}

export default Main