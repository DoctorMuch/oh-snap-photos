import React from "react";
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe('Contact form', () => {
  it('renders', () => {
    render(<Contact />)
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('form heading is visible', () => {
  it('inserts text into the heading', () => {
    const { getByTestId } =
      render(<Contact />)
    expect(getByTestId('contact-head')).toHaveTextContent('Contact Me');
    expect(getByTestId('btn')).toHaveTextContent('Send Message');
  });
})