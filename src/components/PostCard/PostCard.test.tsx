import PostCard from '.';
import { Post } from '../../model/Post'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

const postMock: Post = {
  id: 123,
  username: 'Matheus',
  created_datetime: '2021-08-17T22:22:54.324566Z',
  title: 'Lorem',
  content: 'Lorem ipsum'
}

describe('<PostCard />', () => {
  test("Title should be 'Lorem'", () => {
    const { container } = render(
      <Provider store={store}>
        <PostCard post={postMock} />
      </Provider>
    );

    const title = container.querySelector('h1');

    expect(title.textContent).toBe('Lorem')
  });
  test("Content should be 'Lorem ipsum'", () => {
    const { container } = render(
      <Provider store={store}>
        <PostCard post={postMock} />
      </Provider>
    );

    const content = container.querySelector('p');

    expect(content.textContent).toBe('Lorem ipsum')
  });
  test("Username should be '@Matheus'", () => {
    const { container } = render(
      <Provider store={store}>
        <PostCard post={postMock} />
      </Provider>
    );

    const username = container.querySelector('label');

    expect(username.textContent).toBe('@Matheus')
  });
});
