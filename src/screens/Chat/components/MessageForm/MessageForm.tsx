import { KeyboardAvoidingView, View } from 'react-native';
import { TextInput, ToggleButton } from 'react-native-paper';
import { Formik } from 'formik';

import styles from './MessageForm.styles';
import colors from '../../../../constants/colors';

interface MessageFormProps {
  handleSubmit: (values: { message: string }) => void;
}

const MessageForm = ({ handleSubmit }: MessageFormProps) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ handleBlur, handleSubmit: submit, handleChange, values }) => (
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange('message')}
            onBlur={handleBlur('message')}
            mode="outlined"
            outlineStyle={styles.input}
            cursorColor={styles.input.color}
            value={values.message}
            style={styles.input}
            placeholder="Escibe tu mensaje"
          />
          <ToggleButton onPress={() => submit()} disabled={values.message === ''} size={30} icon="send" iconColor={colors.primary} />
        </View>
      )}
    </Formik>
  );
};

export default MessageForm;
