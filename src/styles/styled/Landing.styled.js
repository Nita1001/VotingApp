import styled from 'styled-components';

const Wrapper = styled.main`
img{
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 200px;
  height: 200px;
}
img:hover{
  transform: scale(1.2);
}
nav {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.full-screen-container {
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}


.login-container {
  background-color: hsla(286, 65%, 62%, 0.395);
  padding: 40px 30px;
  min-width: 400px;
  width: 50%;
  max-width: 600px;
}

.login-title {
  color: #fff;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  font-size: 1.6rem;
  font-weight: normal;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: baseline;
}

.input-group label {
  color: #fff;
  font-weight: lighter;
  font-size: 1.2rem;
  margin-bottom: 7px;
}

.input-group input {
  font-size: 1.5rem;
  height: 4rem;
  width: 100%;
  padding: 0.3rem 0.25rem;
  background-color: hsla(201, 100%, 91%, 0.3);
  border: 1px solid hsl(201, 100%, 6%);
  outline: none;
  border-radius: 5px;
  color: #fff;
  font-weight: lighter;

}

.input-group input:focus {
  border: 1px solid hsl(295, 100%, 50%);
}

.login-button {
  padding: 10px 30px;
  width: 100%;
  border-radius: 5px;
  background: hsla(294, 100%, 50%, 0.1);
  border: 1px solid hsl(296, 100%, 50%);
  outline: none;
  font-size: 2rem;
  color: #fff;
  font-weight: lighter;
  margin-top: 20px;
  cursor: pointer;
}

.login-button:hover {
  background-color: hsla(285, 100%, 50%, 0.3);
}

.login-button:focus {
  background-color: hsla(201, 100%, 50%, 0.5);
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1.38rem;
  line-height: 1.3;
  text-transform: capitalize;
}

h1 {
  font-weight: 700;
  font-size: 2rem;
}

@media (min-width: 992px) {
  .page {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
    display: block;
  }
}

`;

export default Wrapper;