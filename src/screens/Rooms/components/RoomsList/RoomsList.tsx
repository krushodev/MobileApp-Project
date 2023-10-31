import { useState } from 'react';
import { useModal } from '../../../../hooks/useModal';

import { View, FlatList } from 'react-native';
import RoomCard from '../RoomCard/RoomCard';
import RoomPasswordValidationContainer from '../RoomPasswordValidationContainer/RoomPasswordValidationContainer';
import RoomEmptyCard from '../RoomEmptyCard/RoomEmptyCard';
import { Loading } from '../../../../components';

import { globalStyles } from '../../../../../global.styles';
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
      <View style={[globalStyles.container, styles.container]}>
        {roomsList ? (
          roomsList.length > 0 ? (
            <FlatList
              data={roomsList}
              renderItem={({ item }) => <RoomCard room={item} showModal={showModal} setRoomSelected={setRoomSelected} />}
              keyExtractor={item => item.id}
            />
          ) : (
            <RoomEmptyCard />
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
