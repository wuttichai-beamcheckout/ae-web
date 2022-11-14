import Button from './Button'
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test('render', () => {
  render(<Button />)
  expect(screen.getByTestId('hello')).toHaveTextContent('button')
})