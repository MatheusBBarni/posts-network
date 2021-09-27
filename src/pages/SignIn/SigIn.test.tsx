import SignIn from '.';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('<SignIn />', () => {
  test('Should render form', () => {
    const { container } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });
  test('Should render title', () => {
    const { container } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const title = container.querySelector('h1');

    expect(title).toBeInTheDocument();
  });
  test('Should render input', () => {
    const { container } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const input = container.querySelector('input');

    expect(input).toBeInTheDocument();
  });
  test('Should render button', () => {
    const { container } = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
  });
});
