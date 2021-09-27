import React, { useState } from 'react';
import { Edit as EditIcon } from '@styled-icons/boxicons-solid/Edit';
import { TrashBin as TrashBinIcon } from '@styled-icons/ionicons-solid/TrashBin';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';

import { selectUser } from '../../features/app/appSlice';
import { Post } from '../../model/Post';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deletePost } from '../../actions/deletePost';
import Title from '../Title';
import { ActionWrapper, Container, Content, ContentHeader, TitleWrapper, ModalContent, ModalFooter, ModalHeader } from './styles';
import Form from '../Form';
import TextField from '../TextField';
import { editPost } from '../../actions/editPost';
import { Button } from '../Button';

export type PostCardProps = {
  post: Post;
}

const actionIconProps = {
  color: '#ffffff',
  size: 20,
  style: {
    cursor: 'pointer'
  }
}

const PostCard = ({
  post,
}: PostCardProps) => {
  const {
    id,
    title,
    content,
    username,
    created_datetime
  } = post;

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [postToEdit, setPostToEdit] = useState<Post>();
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

  const deletePostWithId = (postId: number) => {
    dispatch(deletePost(postId));
  }

  const handleEdit = () => {
    setIsModalOpen(true);
    setPostToEdit(post);
  }

  const handleSubmit = () => {
    if (postToEdit) {
      dispatch(editPost(postToEdit));
      closeModal();
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setPostToEdit({} as Post);
  }

  return (
    <Container>
      <TitleWrapper>
        <Title color="#ffffff">
          {title}
        </Title>
        {isPostOwner && (
          <ActionWrapper>
            <TrashBinIcon {...actionIconProps} onClick={() => setIsModalOpen(true)} />
            <EditIcon {...actionIconProps} onClick={handleEdit} />
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
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={{
          content: {
            height: 'fit-content',
            background: postToEdit?.id ? 'none' : '#ffffff',
            border: postToEdit?.id ? 'none' : '1px solid #777777'
          }
        }}

      >
        <ModalContent>
          {!!postToEdit?.id ? (
            <Form
              buttonText="SAVE"
              buttonDisabled={!postToEdit.title || !postToEdit.content}
              title="Edit item"
              onSubmit={handleSubmit}
              width="720px"
            >
              <TextField
                type="input"
                value={postToEdit.title}
                label="Title"
                placeHolder="Post title"
                onChange={(value) => {
                  setPostToEdit({
                    ...post,
                    title: value
                  })
                }}
              />
              <TextField
                type="textarea"
                rows={3}
                value={postToEdit.content}
                label="Content"
                placeHolder="Post content"
                onChange={(value) => {
                  setPostToEdit({
                    ...post,
                    content: value
                  })
                }}
              />
            </Form>
          ) : (
              <>
                <ModalHeader>
                  <Title>Are you sure you want to delete this item?</Title>
                </ModalHeader>
                <ModalFooter>
                  <Button variant="inside_out" onClick={closeModal}>
                    Cancel
                </Button>
                  <Button variant="inside_out" onClick={() => deletePostWithId(id)}>
                    OK
                </Button>
                </ModalFooter>
              </>
            )}
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default PostCard;