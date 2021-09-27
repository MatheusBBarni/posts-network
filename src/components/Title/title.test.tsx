import Title from '.';
import { render } from '@testing-library/react';

describe('<Title />', () => {
  test('Color should be #000000', () => {
    const { getByTestId } = render(
      <Title data-testid="title">Test</Title>
    );

    expect(getByTestId('title')).toHaveStyle('color: #000000')
  });
  test('Color should be #ffffff', () => {
    const { getByTestId } = render(
      <Title color="#ffffff" data-testid="title">Test</Title>
    );

    expect(getByTestId('title')).toHaveStyle('color: #ffffff')
  });
  test("Content should be 'Jest test'", () => {
    const { getByTestId } = render(
      <Title color="#ffffff" data-testid="title">Jest test</Title>
    );

    expect(getByTestId('title').textContent).toBe('Jest test');
  });
});
