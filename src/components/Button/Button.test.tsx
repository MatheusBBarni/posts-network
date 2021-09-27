import { Button } from '.';
import { render } from '@testing-library/react';

describe('<Button />', () => {
  test('Background should be #000000', () => {
    const { getByTestId } = render(
      <Button variant="normal" data-testid="button">Test</Button>
    );

    expect(getByTestId('button')).toHaveStyle('background-color: #000000')
  });
  test('Background should be #ffffff', () => {
    const { getByTestId } = render(
      <Button variant="inside_out" data-testid="button">Test</Button>
    );

    expect(getByTestId('button')).toHaveStyle('background-color: #ffffff')
  });
});
