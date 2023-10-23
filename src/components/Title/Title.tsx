import { View } from 'react-native';
import { Text } from 'react-native-paper';

import styles from './Title.styles';
import { globalStyles } from '../../../global.styles';

interface TitleProps {
  title: string;
  align?: 'center' | 'left' | 'right';
}

const Title = ({ title, align }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text
        variant="displaySmall"
        style={[globalStyles.textBold, styles.title, { textAlign: align ?? 'left', marginLeft: !align || align === 'left' ? 15 : 0 }]}
      >
        {title}
      </Text>
    </View>
  );
};

export default Title;
