/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Exit as ExitIcon } from '@styled-icons/icomoon/Exit'

import { fetchPosts } from '../../actions/fetchPosts';
import { selectPosts, selectUser } from '../../features/app/appSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  Container,
  Content,
  ContentWrapper,
  PostsWrapper,
  TitleWrapper,
  UserTip
} from './styles';
import { SET_USER } from '../../features/app/appActions';
import Title from '../../components/Title';
import Form from '../../components/Form';
import { CreatePost, Post } from '../../model/Post';
import TextField from '../../components/TextField';
import { addPost } from '../../actions/addPost';
import PostCard from '../../components/PostCard';

const Main: React.FC = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const posts = useAppSelector(selectPosts);

  const [post, setPost] = useState<CreatePost | Post>({
    title: '',
    content: '',
    username: user
  });

  useEffect(() => {
    dispatch(fetchPosts)
  }, [])

  useEffect(() => {
    if (!user && history) {
      history.push('/sign-in')
    }
  }, [user])

  const resetPost = () => {
    setPost({
      title: '',
      content: '',
      username: user
    });
  }

  const handleSubmit = () => {
    dispatch(addPost(post));
    resetPost();
  }

  return (
    <Container>
      <ContentWrapper>
        <TitleWrapper>
          <Title color="#ffffff">CodeLeap Network</Title>
        </TitleWrapper>
        <Content>
          <Form
            buttonText="CREATE"
            buttonDisabled={!post.title || !post.content}
            title="What's on your mind?"
            onSubmit={handleSubmit}
            width="720px"
          >
            <TextField
              type="input"
              value={post.title}
              label="Title"
              placeHolder="Post title"
              onChange={(value) => {
                setPost({
                  ...post,
                  title: value
                })
              }}
            />
            <TextField
              type="textarea"
              rows={3}
              value={post.content}
              label="Content"
              placeHolder="Post content"
              onChange={(value) => {
                setPost({
                  ...post,
                  content: value
                })
              }}
            />
          </Form>
          <PostsWrapper>
            {posts.map((post, index) => (
              <PostCard key={`${post.id}-${index}`} post={post} />
            ))}
          </PostsWrapper>
        </Content>
      </ContentWrapper>
      <UserTip>
        {user}
        <ExitIcon
          size={20}
          color="#ff0000"
          style={{
            cursor: 'pointer'
          }}
          onClick={() => dispatch({ type: SET_USER, payload: '' })}
        />
      </UserTip>
    </Container>
  );
}

export default Main;