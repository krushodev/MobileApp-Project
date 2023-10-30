import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../../../services/socket';

import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import MemberCard from '../MemberCard/MemberCard';
import { Button, Loading } from '../../../../components';

import { showToast } from '../../../../helper/toast';
import { removeMember, removeRoom } from '../../../../api/routes/roomsRoutes';
import { removeUserRoom } from '../../../../store/slices/authSlice';

import { globalStyles } from '../../../../../global.styles';
import styles from './DrawerChatContent.styles';

import type { IRoom, IUser } from '../../../../types';
import type { IRootState } from '../../../../store';
import type { StackNavigation } from '../../../../navigation/types';

interface DrawerChatContentProps {
  room: IRoom;
}

const DrawerChatContent = ({ room }: DrawerChatContentProps) => {
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation<StackNavigation>();
  const queryClient = useQueryClient();
  const user = useSelector<IRootState>(state => state.auth.user);
  const dispatch = useDispatch();

  const isOwner = (user as IUser).id === room?.owner;

  const mutationRemoveRoom = useMutation({
    mutationFn: removeRoom,
    onMutate: variables => {
      socket.emit('removeRoom', variables);
    },
    onSuccess: async variables => {
      await queryClient.refetchQueries({ queryKey: ['roomsList'] });
      showToast({ message: 'Room eliminada correctamente', type: 'success' });
      dispatch(removeUserRoom(room.id));
      setLoading(false);
      navigate('Rooms');
    }
  });

  const mutationRemoveMember = useMutation({
    mutationFn: removeMember,
    onSuccess: async variables => {
      await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: room.id }] });
      showToast({ message: 'Has abandonado la room', type: 'success' });
      dispatch(removeUserRoom(room.id));
      setLoading(false);
      navigate('Rooms');
    }
  });

  const handlePress = () => {
    if (isOwner) {
      mutationRemoveRoom.mutateAsync(room.id);
      setLoading(true);
    } else {
      mutationRemoveMember.mutateAsync({ rid: room.id, uid: (user as IUser).id });
      setLoading(true);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={[styles.text, globalStyles.textRegular]}>Miembros</Text>
      <FlatList
        style={styles.membersList}
        data={room?.members}
        renderItem={({ item }) => <MemberCard user={item.user} />}
        keyExtractor={item => item.user.id}
      />
      <Button text={isOwner ? 'Eliminar room' : 'Abandonar room'} onPress={handlePress} type="primary" />
    </View>
  );
};

export default DrawerChatContent;
