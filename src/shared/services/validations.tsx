import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('You have entered an invalid email address.')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Password must contain uppercase, lowercase, number and symbol.',
    ),
});

export const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('InValid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .required('Please enter your password.')
    .min(8, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Password must contain uppercase, lowercase, number and symbol.',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const ForgotValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Please Enter Correct Email')
    .required('Email is required'),
});
export const NewPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Please enter your new password.')
    .min(8, 'Password is too short.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain min 8 characters uppercase,lowercase,number and special symbol',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const EmailVerificationSchema = Yup.object().shape({
  email: Yup.string()
    .email('InValid email')
    .required('Please enter your email address'),
});
