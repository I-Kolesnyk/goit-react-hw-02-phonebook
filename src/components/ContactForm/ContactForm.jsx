import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

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
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             name="number"
//             type="tel"
// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// required
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

const schema = object().shape({
  name: string().max(20).required(),
  number: string().min(3).required(),
});

function validateNumber(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
      value
    )
  ) {
    error =
      'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.';
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)
  ) {
    error =
      "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.";
  }
  return error;
}

function ContactForm({ onSubmit }) {
  function handleSubmit(values, { resetForm }) {
    onSubmit(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledInput
            name="name"
            type="text"
            validate={validateName}
            placeholder="Enter a contact name"
          />
          <ErrorMessage name="name">{msg => <div>{msg}</div>}</ErrorMessage>
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput
            name="number"
            type="tel"
            validate={validateNumber}
            placeholder="Enter a contact number"
          />
          <ErrorMessage name="number">
            {msg => <div className="message">{msg}</div>}
          </ErrorMessage>
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
