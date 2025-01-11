import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const onChangeFilter = e => {
    dispatch(filteredContacts(e.currentTarget.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="name" value={filter} onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;
