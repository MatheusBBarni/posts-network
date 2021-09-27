import TextField from '.';
import { render } from '@testing-library/react';

describe('<TextField />', () => {
  test('Should render a input', () => {
    const { container } = render(
      <TextField
        type="input"
        label="Jest"
        onChange={jest.fn}
        value=""
      />
    );

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();
  });
  test('Should render a textarea', () => {
    const { container } = render(
      <TextField
        type="textarea"
        label="Jest"
        onChange={jest.fn}
        value=""
      />
    );

    const textarea = container.querySelector('textarea');

    expect(textarea).toBeInTheDocument();
  });
});
