/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Character name="Test Character" image="some-image.jpg"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
