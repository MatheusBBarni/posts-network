import React, { useState } from 'react';
import { Edit as EditIcon } from '@styled-icons/boxicons-solid/Edit';
import { TrashBin as TrashBinIcon } from '@styled-icons/ionicons-solid/TrashBin';

import { selectUser } from '../../features/app/appSlice';
import { Post } from '../../model/Post';
import { useAppSelector } from '../../redux/hooks';
import Title from '../Title';
import { ActionWrapper, Container, Content, ContentHeader, TitleWrapper } from './styles';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export type PostCardProps = {
  post: Post
}

const actionIconProps = {
  color: '#ffffff',
  size: 20,
  style: {
    cursor: 'pointer'
  }
}

const PostCard = ({
  post: {
    title,
    content,
    username,
    created_datetime
  }
}: PostCardProps) => {
  const user = useAppSelector(selectUser);

  const [isPostOwner] = useState<boolean>(user.trim().toLocaleLowerCase() === username.trim().toLocaleLowerCase());

  const getTime = () => {
    const parsedDate = new Date(created_datetime);
    const nowDate = new Date();

    const differenceInDaysResult = differenceInDays(nowDate, parsedDate);
    if (differenceInDaysResult > 0) {
      return `${differenceInDaysResult} day${differenceInDaysResult > 1 ? 's' : ''}`;
    }

    const differenceInHoursResult = differenceInHours(nowDate, parsedDate);
    if (differenceInHoursResult > 0) {
      return `${differenceInHoursResult} Hour${differenceInHoursResult > 1 ? 's' : ''}`;
    }

    const differenceInMinutesResult = differenceInMinutes(nowDate, parsedDate);
    if (differenceInMinutesResult > 0) {
      return `${differenceInMinutesResult} Minute${differenceInMinutesResult > 1 ? 's' : ''}`;
    }

    const differenceInSecondsResult = differenceInSeconds(nowDate, parsedDate);
    return `${differenceInSecondsResult} Second${differenceInSecondsResult > 1 ? 's' : ''}`;
  }

  return (
    <Container>
      <TitleWrapper>
        <Title color="#ffffff">
          {title}
        </Title>
        {isPostOwner && (
          <ActionWrapper>
            <TrashBinIcon {...actionIconProps} />
            <EditIcon {...actionIconProps} />
          </ActionWrapper>
        )}
      </TitleWrapper>
      <Content>
        <ContentHeader>
          <label>@{username}</label>
          <span>{getTime()}</span>
        </ContentHeader>
        <p>{content}</p>
      </Content>
    </Container>
  );
}

export default PostCard;