import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Chip, Switch, Text, TextInput } from 'react-native-paper';
import { Formik } from 'formik';

import topics from '../../../global/topics';

import styles from './CreateRoomForm.styles';

interface CreateRoomFormProps {
  handleSubmit: (values: { name: string; password: string; private: boolean; topics: string[] }) => void;
}

const CreateRoomForm = ({ handleSubmit }: CreateRoomFormProps) => {
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
              <View style={styles.inputsContainer}>
                <TextInput
                  label="Nombre de Room"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                ></TextInput>
                <View style={styles.privateSelectContainer}>
                  <Text>Room Privada</Text>
                  <Switch value={values.private} onValueChange={handleSwitch} />
                </View>
                <TextInput
                  label="Contraseña de Room"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  disabled={!values.private}
                ></TextInput>
                <View>
                  <Text>Topics</Text>
                  <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                    {topics.map(topic => (
                      <Chip
                        mode={values.topics.includes(topic) ? 'flat' : 'outlined'}
                        icon={values.topics.includes(topic) ? 'check' : ''}
                        onPress={() => handleChip(topic)}
                      >
                        {topic}
                      </Chip>
                    ))}
                  </View>
                </View>
              </View>
              <Button textColor="white" style={styles.button} onPress={() => submit()}>
                Crear
              </Button>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default CreateRoomForm;
