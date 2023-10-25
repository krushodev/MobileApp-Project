import { View } from 'react-native';
import { TextInput, ToggleButton } from 'react-native-paper';
import { Formik } from 'formik';

import * as yup from 'yup';

import styles from './MessageForm.styles';
import colors from '../../../../constants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

interface MessageFormProps {
  handleSubmit: (values: { message: string }) => void;
}

const MessageForm = ({ handleSubmit }: MessageFormProps) => {
  const validationSchema = yup.object({
    message: yup.string().required()
  });

  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleBlur, handleSubmit: submit, handleChange, values }) => (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <ToggleButton size={responsiveFontSize(3.5)} icon="emoticon-happy-outline" iconColor={colors.chetwodeBlue700} />
            <TextInput
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              mode="outlined"
              outlineStyle={styles.input}
              cursorColor={colors.chetwodeBlue500}
              textColor={colors.chetwodeBlue900}
              placeholderTextColor={colors.chetwodeBlue900}
              value={values.message}
              style={styles.input}
              placeholder="Escribe tu mensaje ..."
            />

            <ToggleButton
              style={{ display: !values.message ? 'flex' : 'none' }}
              size={responsiveFontSize(3.5)}
              icon="link-variant"
              iconColor={colors.chetwodeBlue700}
            />
            <ToggleButton
              style={{ display: !values.message ? 'flex' : 'none' }}
              size={responsiveFontSize(3.5)}
              icon="camera"
              iconColor={colors.chetwodeBlue700}
            />
            <ToggleButton
              style={{
                display: values.message ? 'flex' : 'none'
              }}
              onPress={() => submit()}
              size={responsiveFontSize(4)}
              icon="send"
              iconColor={colors.chetwodeBlue700}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default MessageForm;
