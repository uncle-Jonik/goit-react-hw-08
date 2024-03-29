import { useDispatch } from 'react-redux';
import css from './LogInForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { CiLock } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { logIn } from '../../redux/auth/operations';

const logInSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is required.'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required.'),
});

export const LogInForm = () => {
  const lableEmail = useId();
  const lablePassword = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={logInSchema}
      onSubmit={(value, actions) => {
        dispatch(logIn(value));
        actions.resetForm();
      }}
    >
      <Form className={css.formicForm}>
        <label htmlFor={lableEmail} className={css.labelForm}>
          <CiMail />
          Email:
        </label>
        <div className={css.inputBox}>
          <Field type="text" id={lableEmail} name="email" />
          <ErrorMessage name="email" component="span" />
        </div>

        <label htmlFor={lablePassword} className={css.labelForm}>
          <CiLock />
          Password:
        </label>
        <div className={css.inputBox}>
          <Field type="password" id={lablePassword} name="password" />
          <ErrorMessage name="password" component="span" />
        </div>

        <button type="submit" className={css.btnForm}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};
