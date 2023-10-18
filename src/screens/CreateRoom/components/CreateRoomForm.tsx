import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';

import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Chip, Switch, Text, TextInput } from 'react-native-paper';
import { Formik } from 'formik';

import topics from '../../../global/topics';

import styles from './CreateRoomForm.styles';

import type { BottomNavigation } from '../../../navigation/types';
import colors from '../../../constants/colors';

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
          <KeyboardAvoidingView style={styles.container}>
            <ScrollView contentContainerStyle={styles.formContainer}>
              <View>
                <View style={styles.inputsContainer}>
                  <TextInput
                    label="Nombre de Room"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.input}
                    textColor={colors.chetwodeBlue900}
                    underlineColor={colors.chetwodeBlue950}
                  ></TextInput>
                  <View style={styles.privateSelectContainer}>
                    <Text variant="titleMedium">Room Privada</Text>
                    <Switch value={values.private} onValueChange={handleSwitch} color={colors.chetwodeBlue500} />
                  </View>
                  <TextInput
                    label="Contraseña de Room"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    disabled={!values.private}
                    style={styles.input}
                    textColor={colors.chetwodeBlue900}
                    underlineColor={colors.chetwodeBlue950}
                  ></TextInput>
                  <View style={styles.topicsContainer}>
                    <Text variant="titleMedium">Topics</Text>
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
                <Button textColor={colors.chetwodeBlue50} style={[styles.button, styles.buttonSubmit]} onPress={() => submit()}>
                  Crear
                </Button>
                <Button textColor={colors.chetwodeBlue500} style={[styles.button, styles.buttonCancel]} onPress={() => navigate('Home')}>
                  Cancelar
                </Button>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default CreateRoomForm;
