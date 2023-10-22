import { SafeAreaView, Platform, StatusBar } from 'react-native';

import { globalStyles } from '../../../global.styles';

interface SafeWrapperProps {
  children: React.ReactNode;
}

const SafeWrapper = ({ children }: SafeWrapperProps) => {
  return (
    <SafeAreaView style={[globalStyles.container, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeWrapper;
