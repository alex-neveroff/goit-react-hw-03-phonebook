import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  PhonebookForm,
  Label,
  Field,
  SubmitContact,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  inputNameId = nanoid();
  inputPhoneId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <Label htmlFor={this.inputNameId}>
          Name:
          <Field
            type="text"
            name="name"
            id={this.inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </Label>
        <Label htmlFor={this.inputPhoneId}>
          Phone number:
          <Field
            type="tel"
            name="number"
            id={this.inputPhoneId}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </Label>
        <SubmitContact type="submit">Add contact</SubmitContact>
      </PhonebookForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
