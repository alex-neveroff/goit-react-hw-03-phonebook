import PropTypes from 'prop-types';
import { ContactData } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactData key={id}>
      <p className="contact-name">{name}:</p>{' '}
      <p className="contact-number">{number}</p>
      <button className="delete-button" onClick={() => onDelete(id)}>
        <svg className="cross" viewBox="0 0 10 10" width="24px" height="24px">
          <path className="cross-line" d="M2,8 L8,2 M2,2 L8,8" />
        </svg>
      </button>
    </ContactData>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
