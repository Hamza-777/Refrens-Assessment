import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Card from '../Utils/Card';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    render(<Card />, container);
  });
});
