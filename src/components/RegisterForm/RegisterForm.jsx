import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { CiLock } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { register } from '../../redux/auth/operations';

const logInSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is required.'),
  email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is required.'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required.'),
});

export const RegisterForm = () => {
  const lableName = useId();
  const lableEmail = useId();
  const lablePassword = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={logInSchema}
      onSubmit={(value, actions) => {
        dispatch(register(value));
        actions.resetForm();
      }}
    >
      <Form className={css.formicForm}>
        <label htmlFor={lableName} className={css.labelForm}>
          <CiUser />
          Name:
        </label>
        <div className={css.inputBox}>
          <Field type="text" id={lableName} name="name" />
          <ErrorMessage name="name" component="span" />
        </div>

        <label htmlFor={lableEmail} className={css.labelForm}>
          <CiMail />
          Email:
        </label>
        <div className={css.inputBox}>
          <Field type="email" id={lableEmail} name="email" />
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
          Register
        </button>
      </Form>
    </Formik>
  );
};
