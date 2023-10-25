import * as yup from 'yup';

import { View } from 'react-native';
import { TextInput, Text, HelperText } from 'react-native-paper';
import { Button } from '../../../../components';

import { globalStyles } from '../../../../../global.styles';
import styles from './RoomPasswordValidationModalContent.styles';
import colors from '../../../../constants/colors';
import { Formik } from 'formik';

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
      initialValues={{ password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit: submit, values, errors, touched, handleReset }) => (
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
