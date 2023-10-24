import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import { TouchableOpacity, View } from 'react-native';
import { Text, Avatar, IconButton } from 'react-native-paper';

import { setUserImage } from '../../../../store/slices/authSlice';
import { updateImage } from '../../../../api/routes/authRoutes';

import { showToast } from '../../../../helper/toast';

import { globalStyles } from '../../../../../global.styles';
import styles from './UserCard.styles';
import colors from '../../../../constants/colors';

import type { IRootState } from '../../../../store';
import type { IUser } from '../../../../types';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Avatar.Image source={{ uri: user.image }} size={responsiveFontSize(20)} />
        </TouchableOpacity>
        <IconButton
          icon="camera"
          size={responsiveFontSize(3.5)}
          iconColor={colors.chetwodeBlue100}
          style={styles.imageIconButton}
          onPress={handlePress}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[globalStyles.textRegular, styles.usernameText]}>{user.username}</Text>
        <Text style={[globalStyles.textRegular, styles.emailText]}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;
