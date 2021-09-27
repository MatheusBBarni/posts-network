/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../../features/app/appSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

// import { Container } from './styles';

const Main: React.FC = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) {
      history.push('/sign-in')
    }
  }, [user])

  return <div />;
}

export default Main;