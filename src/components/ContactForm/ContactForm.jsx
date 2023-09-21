import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import css from './ContactForm.module.css'
import { addContact } from 'redux/operations';
 
const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!'),
}) 

export const ContactForm = () => {
  const dispatch = useDispatch();
  
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage className={css.error} name="name" component="p"/>
        </label>
        <label className={css.label}>
          Phone number
          <Field
            type="tel"
            name="phone"
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage className={css.error} name="phone" component="p"/>
        </label>
        <button className={css.submit} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}