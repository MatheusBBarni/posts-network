import Main from '.';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('<Main />', () => {
  test('Should render form', () => {
    const { container } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });
});
