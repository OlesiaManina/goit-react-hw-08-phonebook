import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { getLoading } from 'redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add new contact to your phonebook:</h1>
      <ContactForm />
      <h2 className={css.title}>Here is your contact list:</h2>
        <Filter />
      <ContactList />
      <div>{isLoading && 'Request in progress...'}</div>
    </div>
  );
}