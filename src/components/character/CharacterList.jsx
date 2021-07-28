import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styled from 'styled-components';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character
        id={character._id}
        name={character.name}
        image={character.image}
      />
    </li>
  ));

  return (
    <StyledWrapper>
      <ul>
        {characterElements}
      </ul>
    </StyledWrapper>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })
  ).isRequired,
};

export default CharacterList;

const StyledWrapper = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    list-style: none;
  }
`
;
