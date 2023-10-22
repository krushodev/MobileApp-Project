import { View } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './Title.styles';
import { globalStyles } from '../../../global.styles';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={[globalStyles.textBold, styles.title]}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
