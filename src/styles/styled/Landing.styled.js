import styled from 'styled-components';

const Wrapper = styled.main`
img{
  margin: 0 auto;
  margin-top: 1rem;
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
.page {
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}
h1 {
  font-weight: 700;
  font-size: 2rem;
    span {
      color: var(--red-dark);
    }
}
p {
  color: var(--grey-600);
}
.main-img {
  display: none;
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