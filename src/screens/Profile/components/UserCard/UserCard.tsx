import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import { TouchableOpacity, View } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

import { setUserImage } from '../../../../store/slices/authSlice';
import { updateImage } from '../../../../api/routes/authRoutes';

import { showToast } from '../../../../helper/toast';

import { globalStyles } from '../../../../../global.styles';
import styles from './UserCard.styles';

import type { IRootState } from '../../../../store';
import type { IUser } from '../../../../types';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector<IRootState>(state => state.auth.user) as IUser;

  const handlePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 0.5
    });

    if (!result.canceled) {
      const newImage = `data:image/jpeg;base64,${result.assets[0].base64!}`;

      dispatch(setUserImage(newImage));

      const update = await updateImage({ id: user.id, image: newImage });

      if (!update) {
        return;
      }

      showToast({ message: 'Actualización exitosa', type: 'success' });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Avatar.Image style={styles.image} source={{ uri: user.image }} size={100} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={[globalStyles.textRegular, styles.text]} variant="headlineMedium">
          {user.username}
        </Text>
        <Text style={[globalStyles.textRegular, styles.text]} variant="titleMedium">
          {user.email}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
