import styled from 'styled-components';

const Wrapper = styled.section`

.container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    width: 100rem;
}

.bold {
    font-weight: bold;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 25%;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-container {
    padding: 2px 16px;
}

a {
    color: white;
    text-decoration: none;
}

h3 {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    margin: 0 auto;
}
  
`;
export default Wrapper;