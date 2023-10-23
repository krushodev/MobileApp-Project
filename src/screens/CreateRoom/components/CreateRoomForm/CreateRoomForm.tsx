import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';

import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Chip, Switch, Text, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { Button } from '../../../../components';

import topics from '../../../../global/topics';

import { globalStyles } from '../../../../../global.styles';
import styles from './CreateRoomForm.styles';
import colors from '../../../../constants/colors';

import type { BottomNavigation } from '../../../../navigation/types';

interface CreateRoomFormProps {
  handleSubmit: (values: { name: string; password: string; private: boolean; topics: string[] }) => void;
}

const CreateRoomForm = ({ handleSubmit }: CreateRoomFormProps) => {
  const { navigate } = useNavigation<BottomNavigation>();

  return (
    <Formik
      initialValues={{ name: '', password: '', private: false, topics: [''] }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit: submit, values, setFieldValue }) => {
        const handleSwitch = () => {
          setFieldValue('private', !values.private);
        };

        const handleChip = (value: string) => {
          if (values.topics.includes(value)) {
            const newTopics = values.topics.filter(topic => topic !== value);

            setFieldValue('topics', newTopics);
            return;
          }
          setFieldValue('topics', [...values.topics, value]);
        };

        return (
          <KeyboardAvoidingView style={[globalStyles.container, styles.container]}>
            <ScrollView contentContainerStyle={[globalStyles.container, styles.formContainer]}>
              <View>
                <View style={styles.inputsContainer}>
                  <TextInput
                    label="Nombre de Room"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.input}
                    theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                  ></TextInput>
                  <View style={styles.privateSelectContainer}>
                    <Text variant="titleMedium" style={globalStyles.textBold}>
                      Room Privada
                    </Text>
                    <Switch value={values.private} onValueChange={handleSwitch} color={colors.chetwodeBlue500} />
                  </View>
                  <TextInput
                    label="Contraseña de Room"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    disabled={!values.private}
                    style={styles.input}
                    theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                  ></TextInput>
                  <View style={styles.topicsContainer}>
                    <Text variant="titleMedium" style={globalStyles.textBold}>
                      Topics
                    </Text>
                    <View style={styles.topicsChipContainer}>
                      {topics.map(topic => (
                        <Chip
                          style={{ backgroundColor: values.topics.includes(topic) ? colors.chetwodeBlue500 : colors.chetwodeBlue200 }}
                          onPress={() => handleChip(topic)}
                          key={randomUUID()}
                          selectedColor={values.topics.includes(topic) ? colors.chetwodeBlue100 : colors.chetwodeBlue500}
                        >
                          {topic}
                        </Chip>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                <Button text="Crear" type="primary" onPress={() => submit()} />
                <Button text="Cancelar" type="secondary" onPress={() => navigate('Home')} />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default CreateRoomForm;
