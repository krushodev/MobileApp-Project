import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { globalStyles } from '../../../../../global.styles';
import styles from './FeatureCard.styles';

import type { SvgProps } from 'react-native-svg';

interface FeatureCardProps {
  Image: React.FC<SvgProps>;
  text: string;
}

const FeatureCard = ({ Image, text }: FeatureCardProps) => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <View>
        <Image width="100%" height={250} />
      </View>
      <View style={styles.textContainer}>
        <Text variant="headlineMedium" style={globalStyles.textRegular}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default FeatureCard;
