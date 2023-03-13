import { FormControl, FormLabel, Input, Textarea, Text, Button, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPengumuman, getPengumumanById, resetMessage } from '../../redux/slice/pengumumanSlice';

function ShowOnePengumuman() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isSuccess, message } = useSelector((state) => state.pengumuman);
  const toast = useToast();
  const fetchData = async () => {
    await dispatch(getPengumumanById(id));
    if (isSuccess) {
      setTitle(data.title);
      setContent(data.content);
    }
    if (message) {
      setTimeout(() => {
        dispatch(resetMessage());
      }, 1000);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, [isSuccess, dispatch]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await dispatch(editPengumuman({ id, title, content }));
  };
  return (
    <div>
      {isLoading && <Text fontSize='xl'>Loading...</Text>}
      {message &&
        toast({
          title: 'Success',
          description: message,
          status: 'success',
          duration: 1000,
          isClosable: true,
        })}
      {data && (
        <form onSubmit={onSubmitHandler}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              defaultValue={title}
              backgroundColor='white'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={user?.role_id !== 2}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Textarea
              defaultValue={content}
              backgroundColor='white'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={user?.role_id !== 2}
            />
          </FormControl>
          {user?.role_id === 2 && <Button type='submit'>Edit</Button>}
        </form>
      )}
    </div>
  );
}

export default ShowOnePengumuman;
