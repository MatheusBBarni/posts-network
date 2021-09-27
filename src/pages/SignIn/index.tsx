/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/Form';
import TextField from '../../components/TextField';
import { SET_USER } from '../../features/app/appActions';
import { selectUser } from '../../features/app/appSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Container } from './styles';

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

  const handleSubmit = () => {
    dispatch({
      type: SET_USER,
      payload: username
    })

  }

  return (
    <Container>
      <Form
        buttonText="ENTER"
        onSubmit={handleSubmit}
        buttonDisabled={!username}
        title="Welcome to CodeLeap network!"
      >
        <TextField
          type="input"
          value={username}
          placeHolder="Username"
          label="Please enter your username"
          onChange={(value) => setUsername(value)}
        />
      </Form>
    </Container>
  );
}

export default SignIn;