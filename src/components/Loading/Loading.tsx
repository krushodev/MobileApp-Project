import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { globalStyles } from '../../../global.styles';
import styles from './Loading.styles';
import colors from '../../constants/colors';

const Loading = () => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <ActivityIndicator animating={true} color={colors.chetwodeBlue500} size={responsiveFontSize(9)} hidesWhenStopped={true} />
    </View>
  );
};

export default Loading;
