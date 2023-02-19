import styled from 'styled-components';

const Wrapper = styled.nav`

.logo-img{
  width: 50px;
  height: 50px;
  margin: 3px;
}
.nav{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: sans-serif;
  background-color: var(--nav-bg);
  padding: 20px 30px;
  color: var(--nav-color);
  /* border-bottom: var(--nav-border) solid 1px; */
  z-index: 10;
}
.nav-logo {
  display: flex;
  font-weight: bold;
  font-size: 1.1em;
  color: var(--nav-logo);
  text-decoration: none;
}
.nav-3 {
  justify-content: space-between;
  
}
/* LOGOUT button */
.nav-btn {
  background-color: var(--nav-btn);
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
}
h3{
  font-size: 1.2rem;
  color: white;
}
`;
export default Wrapper;