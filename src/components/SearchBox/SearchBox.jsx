import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import css from './SearchBox.module.css';
import { changeValue } from '../../redux/contacts/slice';

export default function SearchBox() {
  const lableFilter = useId();
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);

  return (
    <div className={css.filterBox}>
      <label htmlFor={lableFilter}>Find contacts by name</label>
      <input
        id={lableFilter}
        value={filterState}
        onChange={e => {
          dispatch(changeValue(e.target.value));
        }}
      />
    </div>
  );
}
