import { useSelector } from 'react-redux';
import { selectError, selectLoading, selectVisibleUsers } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';
import Contact from './Contact/Contact';

export default function ContactList() {
  const contactsList = useSelector(selectVisibleUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.contactListBox}>
      {error && (
        <div className={css.information}>
          <b>{error}</b>
        </div>
      )}
      {loading && (
        <div className={css.information}>
          <b>Loading...</b>
        </div>
      )}
      {contactsList.length > 0 ? (
        <ul className={css.contactList}>
          {contactsList.map(({ id, name, number }) => (
            <li key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.information}>
          <b>Nothing 😢</b>
        </div>
      )}
    </div>
  );
}
