import { useDispatch } from "react-redux"
import css from "./ContactListItem.module.css"
import { deleteContact } from "redux/operations";

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  
  return (
    <li key={contact.id} className={css.contact}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.number}>Tel.: {contact.phone}</p>
      <button className={css.delBtn} onClick={() => {dispatch(deleteContact(contact.id))}}>Delete</button>
    </li>
  )
} 