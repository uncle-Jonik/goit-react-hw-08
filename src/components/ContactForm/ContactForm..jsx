import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { CiUser } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContacts } from '../../redux/contacts/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is required.'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required.'),
});

export default function ContactForm() {
  const lableName = useId();
  const lableNumber = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(value, actions) => {
        dispatch(addContacts(value));
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

        <label htmlFor={lableNumber} className={css.labelForm}>
          <CiPhone />
          Number:
        </label>
        <div className={css.inputBox}>
          <Field type="number" id={lableNumber} name="number" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.btnForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
