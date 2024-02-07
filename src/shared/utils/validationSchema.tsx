import * as Yup from 'yup';
export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please provide a valid email'),
  password: Yup.string().required('Password is required'),
});

export const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .required('Please enter your password.')
    .min(8, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain at least 8 characters with uppercase, lowercase, number, and special symbol',
    ),
  confirmPassword: Yup.string()
    .required('No Confirm Password provided.')
    .label('Confirm Password')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});
