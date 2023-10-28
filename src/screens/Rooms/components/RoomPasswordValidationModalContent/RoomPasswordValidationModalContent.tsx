import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as yup from 'yup';

import { Formik } from 'formik';
import { View } from 'react-native';
import { TextInput, Text, HelperText } from 'react-native-paper';
import { Button } from '../../../../components';

import { globalStyles } from '../../../../../global.styles';
import styles from './RoomPasswordValidationModalContent.styles';
import colors from '../../../../constants/colors';

interface PasswordValidationModalContentProps {
  handleSubmit: (values: { password: string }) => void;
  hideModal: () => void;
}

const RoomPasswordValidationModalContent = ({ handleSubmit, hideModal }: PasswordValidationModalContentProps) => {
  const validationSchema = yup.object({
    password: yup.string().required('Este campo es obligatorio')
  });

  return (
    <Formik
      initialValues={{ password: '', passwordVisible: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit: submit, values, errors, touched, handleReset, setFieldValue }) => (
        <View style={styles.container}>
          <Text style={[globalStyles.textBold, styles.title]}>Room Privada</Text>
          <View style={[globalStyles.container, styles.formContainer]}>
            <View>
              <TextInput
                label="Contraseña"
                error={errors.password && touched.password ? true : false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                theme={{ colors: { primary: colors.chetwodeBlue600 } }}
                secureTextEntry={!values.passwordVisible}
                right={
                  <TextInput.Icon
                    size={responsiveFontSize(3.5)}
                    color={colors.chetwodeBlue500}
                    icon={values.passwordVisible ? 'eye' : 'eye-off'}
                    onPress={() => setFieldValue('passwordVisible', !values.passwordVisible)}
                  />
                }
              />
              <HelperText visible={errors.password && touched.password ? true : false} type="error">
                {errors.password}
              </HelperText>
            </View>
            <View style={styles.buttonsContainer}>
              <Button text="Ingresar" type="primary" onPress={() => submit()} />
              <Button
                text="Cancelar"
                type="secondary"
                onPress={() => {
                  hideModal();
                  handleReset();
                }}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RoomPasswordValidationModalContent;
