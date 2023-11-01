import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import { randomUUID } from 'expo-crypto';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import socket from '../../../../services/socket';

import { TouchableOpacity, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { addMember } from '../../../../api/routes/roomsRoutes';

import { showToast } from '../../../../helper/toast';
import { addUserRoom } from '../../../../store/slices/authSlice';

import { globalStyles } from '../../../../../global.styles';
import styles from './RoomCard.styles';
import colors from '../../../../constants/colors';

import type { IRootState } from '../../../../store';
import type { StackNavigation } from '../../../../navigation/types';
import type { IRoom, IUser } from '../../../../types';

interface RoomCardProps {
  room: IRoom;
  showModal: () => void;
  setRoomSelected: React.Dispatch<React.SetStateAction<IRoom | undefined>>;
}

const RoomCard = ({ room, showModal, setRoomSelected }: RoomCardProps) => {
  const { navigate } = useNavigation<StackNavigation>();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const user = useSelector<IRootState>(state => state.auth.user);

  const isOwner = room.owner === (user as IUser).id;

  const handleClick = async () => {
    const userIsInRoom = (user as IUser).rooms.some(userRoom => {
      return userRoom.room === room.id;
    });

    if (!userIsInRoom && !isOwner) {
      if (room.isPrivate) {
        setRoomSelected(room);
        showModal();

        return;
      }

      const result = await addMember({ rid: room.id, uid: (user as IUser).id });

      if (!result) return;

      await queryClient.refetchQueries({ queryKey: ['roomsList', { roomId: room.id }] });

      socket.emit('updateMembers', room);

      showToast({ message: 'Te has unido a la room', type: 'info' });

      dispatch(addUserRoom({ room: room.id, isOwner: false }));
    }

    navigate('ChatScreen', { roomId: room.id, title: room.name });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={[globalStyles.container, styles.infoContainer]}>
        <Text style={[globalStyles.textRegular, styles.roomNameText]}>{room.name}</Text>
        <Text style={[globalStyles.textRegular, styles.roomMembersText]}>Miembros: {room.members?.length}</Text>
        {room.topics.length > 0 && (
          <View style={styles.chipContainer}>
            {room.topics.map(topic => (
              <Text key={randomUUID()} style={[globalStyles.textBold, styles.chip]}>
                {topic}
              </Text>
            ))}
          </View>
        )}
      </View>
      {isOwner && <IconButton icon="crown" iconColor={colors.chetwodeBlue900} size={responsiveFontSize(4)} />}
    </TouchableOpacity>
  );
};

export default RoomCard;
