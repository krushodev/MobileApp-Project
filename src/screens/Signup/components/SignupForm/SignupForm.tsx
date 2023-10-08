import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';

interface SignupFormProps {
  handleSubmit: (values: { username: string; email: string; password: string }) => Promise<void>;
}

const SignupForm = ({ handleSubmit }: SignupFormProps) => {
  return (
    <Formik initialValues={{ username: '', email: '', password: '' }} onSubmit={values => handleSubmit(values)}>
      {({ handleChange, handleBlur, handleSubmit: submit, values }) => (
        <View>
          <TextInput onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username}></TextInput>
          <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}></TextInput>
          <TextInput onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}></TextInput>
          <Button onPress={() => submit()}>Enviar</Button>
        </View>
      )}
    </Formik>
  );
};

export default SignupForm;
