import { useState } from 'react';

import { useModal } from '../../../../hooks/useModal';

import { View, Text, FlatList } from 'react-native';
import RoomCard from '../RoomCard/RoomCard';
import RoomPasswordValidationContainer from '../RoomPasswordValidationContainer/RoomPasswordValidationContainer';
import Loading from '../../../../components/Loading/Loading';

import styles from './RoomsList.styles';

import type { IRoom } from '../../../../types';

interface RoomListProps {
  roomsList: IRoom[] | undefined;
}

const RoomsList = ({ roomsList }: RoomListProps) => {
  const [roomSelected, setRoomSelected] = useState<IRoom>();
  const { isVisible, showModal, hideModal } = useModal();

  return (
    <>
      <View style={styles.container}>
        {roomsList ? (
          roomsList.length > 0 ? (
            <FlatList
              data={roomsList}
              renderItem={({ item }) => <RoomCard room={item} showModal={showModal} setRoomSelected={setRoomSelected} />}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={styles.textAlert}>No hay rooms</Text>
          )
        ) : (
          <Loading />
        )}
      </View>
      <RoomPasswordValidationContainer isVisible={isVisible} hideModal={hideModal} roomSelected={roomSelected!} />
    </>
  );
};

export default RoomsList;
