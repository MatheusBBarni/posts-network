/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import TextField from '../../components/TextField';
import Title from '../../components/Title';
import { SET_USER } from '../../features/app/appActions';
import { selectUser } from '../../features/app/appSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Container, SignInFooter, SignInForm } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    if (!!user) {
      history.push('/')
    }
  }, [user]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    dispatch({
      type: SET_USER,
      payload: username
    })

  }

  return (
    <Container>
      <SignInForm onSubmit={handleSubmit}>
        <Title marginBottom="30px">Welcome to CodeLeap network!</Title>
        <TextField
          type="input"
          value={username}
          placeHolder="Username"
          label="Please enter your username"
          onChange={(value) => setUsername(value)}
        />
        <SignInFooter>
          <Button variant="normal" type="submit">
            ENTER
          </Button>
        </SignInFooter>
      </SignInForm>
    </Container>
  );
}

export default SignIn;