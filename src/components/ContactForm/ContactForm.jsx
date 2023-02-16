import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date, InferType } from 'yup';

const schema = object().shape({
  name: string().required(),
  number: string().required(),
});

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             name="name"
//             type="text"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             name="number"
//             type="tel"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
const initialValues = { name: '', number: '' };

function ContactForm(props) {
  const handleSubmit = (values, { resetForm }) => {
    // event.preventDefault();
    // this.props.onSubmit(this.state);
    console.log(values);
    resetForm();
  };

  // const handleInputChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field
            name="name"
            type="text"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            // value={values}
            // onChange={handleInputChange}
          />
          <ErrorMessage component="div" name="name" />
        </label>
        <label>
          Number
          <Field
            name="number"
            type="tel"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            // value={this.state.number}
            // onChange={this.handleInputChange}
          />
          <ErrorMessage component="div" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
