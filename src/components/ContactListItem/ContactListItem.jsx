import PropTypes from 'prop-types';
import {
  ContactsItem,
  DeleteButton,
  Cross,
  CrossLine,
  ContactNumber,
  ContactName,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactsItem key={id}>
      <ContactName>{name}:</ContactName> <ContactNumber>{number}</ContactNumber>
      <DeleteButton onClick={() => onDelete(id)}>
        <Cross viewBox="0 0 10 10" width="24px" height="24px">
          <CrossLine d="M2,8 L8,2 M2,2 L8,8" />
        </Cross>
      </DeleteButton>
    </ContactsItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
