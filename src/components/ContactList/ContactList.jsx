import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import {getContacts, getFilterValue, getError, getLoading} from 'redux/contacts/selectors'
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contactsFromState = useSelector(getContacts);
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const filterValue = useSelector(getFilterValue);
  const normalizedFilter = filterValue.filter.toLowerCase();
  const visibleContacts = contactsFromState? contactsFromState.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) : null;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const removeContact = contactId => {
    dispatch(deleteContact(contactId))
  }

return (
  <ul className={css.list}>
    {error && <p>{error}</p>}
    {loading && <p>Loading....</p>}
    {visibleContacts && visibleContacts.map(({name, number, id}) => {
      return (
        <li key={id} className={css.listItem}>
          <p className={css.text}>
          {name}: {number}
          </p>
          <button onClick={() => removeContact(id)} className={css.btn}>Delete</button>
        </li>
      )
    } )}
</ul>
)

}

// export default ContactList;

