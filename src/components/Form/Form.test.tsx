import Form from '.';
import { render } from '@testing-library/react';

describe('<Form />', () => {
  test("Title should be 'Jest title'", () => {
    const { container } = render(
      <Form
        buttonText="Jest"
        onSubmit={jest.fn}
        title="Jest title"
      >
        <div>Form Test</div>
      </Form>
    );

    const title = container.querySelector('h1');

    expect(title.textContent).toBe('Jest title')
  });
  test("Button text should be 'Jest'", () => {
    const { container } = render(
      <Form
        buttonText="Jest"
        onSubmit={jest.fn}
        title="Jest title"
      >
        <div>Form Test</div>
      </Form>
    );

    const button = container.querySelector('button');

    expect(button.textContent).toBe('Jest')
  });
});
