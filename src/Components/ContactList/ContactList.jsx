import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {' '}
    {contacts.map(({ id, name, number }) => (
      <li className={styles.listItem} key={id}>
        <p className={styles.listItemText}> {name} : </p>
        <p className={styles.listItemText}> {number} </p>
        <button
          type="button"
          className={button}
          onClick={() => onDeleteContact(id)}
        ></button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }
export default ContactList;