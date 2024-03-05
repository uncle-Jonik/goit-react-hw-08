import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm.';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import css from './PagesStyles.module.css';
import DocumentTitle from '../components/DocumentTitle';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>
        {isLoading ? (
          <div className={css.information}>
            <b>Request in progress...</b>
          </div>
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}
