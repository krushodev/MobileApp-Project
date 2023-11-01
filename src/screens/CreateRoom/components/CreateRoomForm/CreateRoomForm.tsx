import { useNavigation } from '@react-navigation/native';
import { randomUUID } from 'expo-crypto';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as yup from 'yup';

import { View } from 'react-native';
import { Chip, HelperText, Switch, Text, TextInput } from 'react-native-paper';
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

  const validationSchema = yup.object({
    name: yup.string().required('Este campo es obligatorio'),
    private: yup.boolean().required(),
    password: yup.string().when('private', {
      is: true,
      then: schema => schema.required('Este campo es obligatorio'),
      otherwise: schema => schema
    }),
    topics: yup.array().required()
  });

  return (
    <Formik
      initialValues={{ name: '', password: '', private: false, topics: [], passwordVisible: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit: submit, values, setFieldValue, errors, touched, handleReset }) => {
        const handleSwitch = () => {
          setFieldValue('private', !values.private);
        };

        const handleChip = (value: string) => {
          if (values.topics.includes(value as never)) {
            const newTopics = values.topics.filter(topic => topic !== value);

            setFieldValue('topics', newTopics);
            return;
          }
          setFieldValue('topics', [...values.topics, value]);
        };

        return (
          <View style={styles.container}>
            <View>
              <View style={styles.inputsContainer}>
                <View>
                  <TextInput
                    label="Nombre de Room"
                    error={errors.name && touched.name ? true : false}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.input}
                    theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                  ></TextInput>
                  <HelperText visible={errors.name && touched.name ? true : false} type="error">
                    {errors.name}
                  </HelperText>
                </View>
                <View style={styles.privateSelectContainer}>
                  <Text style={[globalStyles.textBold, styles.privateSelectText]}>Room Privada</Text>
                  <Switch value={values.private} onValueChange={handleSwitch} color={colors.chetwodeBlue500} />
                </View>
                <View>
                  <TextInput
                    label="Contraseña de Room"
                    error={values.private && errors.password && touched.password ? true : false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    disabled={!values.private}
                    style={styles.input}
                    theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                    secureTextEntry={!values.passwordVisible}
                    right={
                      <TextInput.Icon
                        size={responsiveFontSize(3.5)}
                        disabled={!values.private}
                        color={colors.chetwodeBlue500}
                        icon={values.passwordVisible ? 'eye' : 'eye-off'}
                        onPress={() => setFieldValue('passwordVisible', !values.passwordVisible)}
                      />
                    }
                  ></TextInput>
                  <HelperText visible={values.private && errors.password && touched.password ? true : false} type="error">
                    {errors.password}
                  </HelperText>
                </View>
                <View style={styles.topicsContainer}>
                  <Text style={[globalStyles.textBold, styles.topicText]}>Topics</Text>
                  <View style={styles.topicsChipContainer}>
                    {topics.map(topic => (
                      <Chip
                        style={{
                          backgroundColor: values.topics.includes(topic as never) ? colors.chetwodeBlue500 : colors.chetwodeBlue200
                        }}
                        textStyle={styles.chipText}
                        onPress={() => handleChip(topic)}
                        key={randomUUID()}
                        selectedColor={values.topics.includes(topic as never) ? colors.chetwodeBlue100 : colors.chetwodeBlue500}
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
              <Button
                text="Cancelar"
                type="secondary"
                onPress={() => {
                  navigate('Home');
                  handleReset();
                }}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default CreateRoomForm;
