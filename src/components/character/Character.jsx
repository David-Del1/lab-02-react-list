/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Character = ({ name, image, id }) => (
  <Link to={`/character/${id}`}>
    <StyledWrapper >
      <img src={image} alt={name} />
      
      <p>{name}</p>
    
    </StyledWrapper>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Character;


const StyledWrapper = styled.div`
  
  background-color: palegoldenrod;
  margin: 1rem;
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 1px 5px 0px black;
  transition: all ease-in-out 0.2s;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1) rotate(-10deg);
    background-color: aquamarine;
  }
  img {
    height: 80%;
    width: 80%;
    align-self: center;
    padding: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0.5rem;
  }
`
;
