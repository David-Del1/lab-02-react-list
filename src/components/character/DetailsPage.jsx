/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCharacter } from '../../services/heyArnoldApi';

export default class DetailsPage extends Component {
  state = {
    character: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const character = await getCharacter(match.params.id);
      this.setState({ character });
    }
    catch(err) {
      console.error(err.message);
    }
    finally {
      this.setState({ loading: false });
    }

  }

  render() {
    const { character } = this.state;

    if(!character) return null;

    return (
      <StyledWrapper>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
      </StyledWrapper>
    );
  }
  
}


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 2rem;
  }

  img {
    height: 300px;
    width: auto;
    object-fit: contain;
  }
`;
