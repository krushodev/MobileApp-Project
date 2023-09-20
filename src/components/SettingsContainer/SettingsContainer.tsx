import { View } from 'react-native';
import React from 'react';
import UserCard from '../UserCard/UserCard';
import { Button } from 'react-native-paper';
import styles from './SettingsContainer.styles';

const SettingsContainer = () => {
  return (
    <View style={styles.container}>
      <UserCard />
      <Button style={styles.button} textColor="white">
        Logout
      </Button>
    </View>
  );
};

export default SettingsContainer;
