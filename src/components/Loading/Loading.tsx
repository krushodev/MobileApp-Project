import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import styles from './Loading.styles';
import colors from '../../constants/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={colors.chetwodeBlue500} size={70} hidesWhenStopped={true} />
    </View>
  );
};

export default Loading;
