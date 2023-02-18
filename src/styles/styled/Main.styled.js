import styled from 'styled-components';

const Wrapper = styled.section`

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10rem;
  grid-row-gap: 10rem;
  max-width: var(--width-container);
  width: 100%;
}

@media(min-width: 540px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media(min-width: 960px){
  .card-grid{
    grid-template-columns: repeat(4, 1fr); 
  }
}

.card{
  list-style: none;
  position: relative;
  bottom: 8rem;
}

.card:before{
  content: '';
  display: block;
  padding-bottom: 146%;
  width: 100%;
}

.card__background{
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: var(--spacing-l);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: brightness(0.85) saturate(1.3) contrast(0.999);
    transform-origin: center;
    transform: scale(1) translateZ(0);
    transition: 
    filter 200ms linear,
    transform 200ms linear;
}

.card:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__category{
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}

 .card-content-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2px 16px;
    margin-top: 2rem;
} 
.card-content-container:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
} 

h3 {
    font-size: 1rem;
    margin: 0 auto;
    text-transform: uppercase;
}
.char-btn{
  width: 8rem;
  text-align: center;
  z-index: 51;
}
.char-votes{
  display: flex;
  flex-direction: column;
}

.char-votes h3{
  margin: 0;
  color: grey;
}
`;
export default Wrapper;