import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  tabBar: {
    height: responsiveHeight(13),
    margin: 10,
    borderRadius: 15
  },
  tabBarIconContainer: {
    alignItems: 'center',
    gap: 5
  },
  tabBarLabel: {
    fontSize: responsiveFontSize(1.8)
  }
});

export default styles;
