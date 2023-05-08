import PropTypes from 'prop-types';
import { Label, Field } from 'components/SearchFilter/SearchFilter.styled';

const SearchFilter = ({ filter, onChange }) => {
  return (
    <Label htmlFor="filter-field">
      Find contacts by name
      <Field id="filter-field" type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchFilter;
