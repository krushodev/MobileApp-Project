import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  tabBar: {
    height: responsiveHeight(10),
    margin: 10,
    borderRadius: 15
  },
  tabBarIconContainer: {
    alignItems: 'center',
    gap: 3
  },
  tabBarLabel: {
    fontSize: responsiveFontSize(1.4)
  }
});

export default styles;
